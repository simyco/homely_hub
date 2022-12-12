import React, {useState} from 'react';
import NavigationService from '../../navigation/NavigationService';
import {useForm, Controller} from 'react-hook-form';
import {ScreenWrapper} from '../../components/Layout';
import {LoginForm} from '../../model/user';
import {
  Button,
  Center,
  FormControl,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  Link,
  Stack,
  Text,
  VStack,
  ZStack,
} from 'native-base';

import {useAuth} from '../../services/hooks/account/useAuth';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = () => {
  const {login, isLoggingIn} = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<LoginForm>({mode: 'onSubmit'});

  const onLogin = async (data: LoginForm) => {
    await login({email: data.email, password: data.password});
    console.log(data);
  };
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const onRegister = () => NavigationService.navigate('Register');
  return (
    <ScreenWrapper withScrollView>
      <VStack p={5}>
        <Center>
          <Image
            alt={'logo'}
            size="xl"
            source={require('../../assets/images/logo_collegami.png')}
          />
        </Center>
        <Heading size={'xl'}>Accedi</Heading>
        <FormControl isInvalid={'email' in errors} mt={5}>
          <ZStack reversed={true}>
            <FormControl.Label mx={2} my={-3} bgColor="white" px={2}>
              Email
            </FormControl.Label>

            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <Input
                  InputLeftElement={
                    <Icon
                      ml={4}
                      size={'xl'}
                      as={MaterialCommunityIcons}
                      name={'email'}
                      color="muted.600"
                    />
                  }
                  autoCorrect={false}
                  value={value}
                  onChangeText={onChange}
                  placeholder="Inserisci la tua email"
                />
              )}
              name="email"
              rules={{required: true, maxLength: 200}}
            />
          </ZStack>
          {errors.email && (
            <FormControl.ErrorMessage>
              Inserisci un email valida
            </FormControl.ErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={'password' in errors} mt={5}>
          <ZStack reversed={true}>
            <FormControl.Label mx={2} my={-3} bgColor="white" px={2}>
              Password
            </FormControl.Label>

            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <Input
                  autoCorrect={false}
                  InputLeftElement={
                    <Icon
                      ml={4}
                      size={'xl'}
                      name={'lock'}
                      as={MaterialCommunityIcons}
                      color="muted.600"
                    />
                  }
                  InputRightElement={
                    <IconButton
                      mr={3}
                      icon={
                        <Icon size={'xl'} name={'eye'} color="primary.400" />
                      }
                      size={35}
                      onPress={() => setShowPassword(!showPassword)}
                    />
                  }
                  type={showPassword ? 'text' : 'password'}
                  value={value}
                  onChangeText={onChange}
                  placeholder="Inserisci la tua password"
                />
              )}
              name="password"
              rules={{required: true, maxLength: 200}}
            />
          </ZStack>
          {errors.password && (
            <FormControl.ErrorMessage>
              Inserisci una password valida
            </FormControl.ErrorMessage>
          )}
        </FormControl>

        <Stack direction="row" marginY={'4'} space={3}>
          <Link
            _text={{
              color: 'primary.400',
              fontSize: 'lg',
            }}
            onPress={onForgot}>
            Ho dimenticato la password
          </Link>
        </Stack>
        <Button
          isLoading={isLoggingIn}
          _text={{
            fontSize: 'xl',
            textTransform: 'uppercase',
          }}
          bg={'primary.400'}
          onPress={handleSubmit(onLogin)}>
          Entra
        </Button>
        <Center marginY={'3'}>
          <Text fontSize={'2xl'}>Non hai un account?</Text>
        </Center>
        <Center mb={'6'}>
          <Link
            _text={{
              color: 'primary.400',
              fontSize: 'xl',
            }}
            onPress={onRegister}>
            Registrati!
          </Link>
        </Center>
        <Text>Version 0.0.1</Text>
      </VStack>
    </ScreenWrapper>
  );
};

export default Login;
