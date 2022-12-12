import React from 'react';
import {Text, View} from 'react-native';
import {
  useQuery,
  useMutation,
  useQueryClient,
  UseMutateAsyncFunction,
  QueryObserverResult,
  RefetchOptions,
} from '@tanstack/react-query';

export interface AuthProviderConfig<User = unknown, Error = unknown> {
  key?: string;
  loadUser: (data: any) => Promise<User>;
  loginFn: (data: any) => Promise<User>;
  registerFn: (data: any) => Promise<User>;
  logoutFn: () => Promise<any>;
  waitInitial?: boolean;
  LoaderComponent?: () => any;
  ErrorComponent?: ({error}: {error: Error | null}) => any;
}

export interface AuthContextValue<
  User = unknown,
  Error = unknown,
  LoginCredentials = unknown,
  RegisterCredentials = unknown,
> {
  user: User | undefined;
  login: UseMutateAsyncFunction<User, any, LoginCredentials>;
  logout: UseMutateAsyncFunction<any, any, void, any>;
  register: UseMutateAsyncFunction<User, any, RegisterCredentials>;
  isLoggingIn: boolean;
  isLoggingOut: boolean;
  isRegistering: boolean;
  refetchUser: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<User, Error>>;
  error: Error | null;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export function initReactQueryAuth<
  User = unknown,
  Error = unknown,
  LoginCredentials = unknown,
  RegisterCredentials = unknown,
>(config: AuthProviderConfig<User, Error>) {
  const AuthContext = React.createContext<AuthContextValue<
    User,
    Error,
    LoginCredentials,
    RegisterCredentials
  > | null>(null);
  AuthContext.displayName = 'AuthContext';

  const {
    loadUser,
    loginFn,
    registerFn,
    logoutFn,
    key = 'auth-user',
    waitInitial = false,
    LoaderComponent = () => (
      <View>
        <Text>Caricamento</Text>
      </View>
    ),
    ErrorComponent = (error: any) => (
      <View>
        <Text>{JSON.stringify(error, null, 2)}</Text>
      </View>
    ),
  } = config;

  function AuthProvider({children}: AuthProviderProps): any {
    const queryClient = useQueryClient();

    const {
      data: user,
      error,
      status,
      isLoading,
      fetchStatus,
      isSuccess,
      refetch,
    } = useQuery<User, Error>({
      queryKey: [key],
      queryFn: loadUser,
    });

    const setUser = React.useCallback(
      (data: User) => queryClient.setQueryData([key], data),
      [queryClient],
    );

    const loginMutation = useMutation({
      mutationFn: loginFn,
      onSuccess: (userSuccess: any) => {
        setUser(userSuccess);
      },
    });

    const registerMutation = useMutation({
      mutationFn: registerFn,
      onSuccess: userRegistered => {
        setUser(userRegistered);
      },
    });

    const logoutMutation = useMutation({
      mutationFn: logoutFn,
      onSuccess: () => {
        queryClient.clear();
      },
    });

    const value = React.useMemo(
      () => ({
        user,
        error,
        refetchUser: refetch,
        login: loginMutation.mutateAsync,
        isLoggingIn: loginMutation.isLoading,
        logout: logoutMutation.mutateAsync,
        isLoggingOut: logoutMutation.isLoading,
        register: registerMutation.mutateAsync,
        isRegistering: registerMutation.isLoading,
      }),
      [
        user,
        error,
        refetch,
        loginMutation.mutateAsync,
        loginMutation.isLoading,
        logoutMutation.mutateAsync,
        logoutMutation.isLoading,
        registerMutation.mutateAsync,
        registerMutation.isLoading,
      ],
    );

    if (isSuccess || !waitInitial) {
      return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
      );
    }

    if (isLoading || fetchStatus === 'idle') {
      return <LoaderComponent />;
    }

    if (error) {
      return <ErrorComponent error={error} />;
    }

    return (
      <View>
        <Text>Unhandled status: {status}</Text>
      </View>
    );
  }

  function useAuth() {
    const context = React.useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  }

  return {AuthProvider, AuthConsumer: AuthContext.Consumer, useAuth};
}
