import {User} from '../../../model/user';
import {AuthProviderConfig, initReactQueryAuth} from '../../react-query/auth';
import {
  AuthResponse,
  AuthService,
  CreateSubjectApiRequest,
  OpenAPI,
  SubjectService,
} from '../../rest';
import storage from '../../storage/storage';

export type LoginCredentials = {
  email: string;
  password: string;
};

export type RegisterCredentials = {
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
  privacyPolicy?: boolean;
};

async function handleUserResponse(data: AuthResponse) {
  storage.setToken(data.token!);
  storage.setRefreshToken(data.refreshToken!);

  OpenAPI.TOKEN = data.token!;
  return data.subject;
}

async function loadUser(): Promise<User | any> {
  let user = null;

  if (await storage.getToken()) {
    try {
      const response = await SubjectService.subjectMe();

      return {
        email: response.email,
        id: response.id,
        imageUrl: response.avatar,
        name: response.name,
        surname: response.surname,
        userId: response.userId,
      };
    } catch (error) {
      console.warn('User not found');
      return null;
    }
  }
  return user;
}

async function loginFn(data: LoginCredentials) {
  const response = await AuthService.authToken(data);
  const user = await handleUserResponse(response);
  return user;
}

async function registerFn(data: RegisterCredentials) {
  console.log(data.email);
  const request: CreateSubjectApiRequest = {
    email: data.email,
    name: data.name,
    password: data.password,
    surname: data.surname,
  };
  await SubjectService.subjectCreate(request);
  const user = await loginFn({email: data.email!, password: data.password!});
  console.log('registered' + user?.id);
}

async function logoutFn() {
  const user = await loadUser();
  OpenAPI.TOKEN = undefined;
  await storage.clearAll();
}

const authConfig: AuthProviderConfig<User | any> = {
  loadUser,
  loginFn,
  logoutFn,
  registerFn,
  waitInitial: true,
};
const {AuthProvider, AuthConsumer, useAuth} = initReactQueryAuth<
  User,
  any,
  LoginCredentials,
  RegisterCredentials
>(authConfig);

export {AuthProvider, AuthConsumer, useAuth};
