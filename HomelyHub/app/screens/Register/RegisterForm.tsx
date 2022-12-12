import {
  Button,
  Checkbox,
  FormControl,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  Link,
  Text,
  VStack,
  ZStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  RegisterCredentials,
  useAuth,
} from '../../services/hooks/account/useAuth';
type RegisterFormProps = {
  submitFn: () => void;
  acceptPrivacyPolicy: boolean;
  backButtonFn: () => void;
  privacyPolicyPressFn: () => void;
};
export const RegisterForm = ({
  backButtonFn,
  acceptPrivacyPolicy = false,
  submitFn,
  privacyPolicyPressFn,
}: RegisterFormProps) => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm<RegisterCredentials>({
    mode: 'onSubmit',
    defaultValues: {privacyPolicy: acceptPrivacyPolicy},
  });
  const [showPassword, setShowPassword] = useState(false);
  const {register} = useAuth();

  const onRegistration = async (data: RegisterCredentials) => {
    const user = await register(data);
    submitFn();
  };
  useEffect(() => {
    setValue('privacyPolicy', acceptPrivacyPolicy);
  }, [setValue, acceptPrivacyPolicy]);

  const onError = (errors, e) => {
    return console.log(errors);
  };
  return (
    <VStack>
      <Heading size={'2xl'}>Registrati</Heading>
      <FormControl isInvalid={'name' in errors} mt={5}>
        <ZStack reversed={true}>
          <FormControl.Label mx={2} my={-3} bgColor="white" px={2}>
            Nome
          </FormControl.Label>

          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder="Inserisci il tuo nome"
              />
            )}
            name="name"
            rules={{required: true, maxLength: 200}}
          />
        </ZStack>
        {errors.name && (
          <FormControl.ErrorMessage>
            Inserisci un nome valido
          </FormControl.ErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={'surname' in errors} mt={5}>
        <ZStack reversed={true}>
          <FormControl.Label mx={2} my={-3} bgColor="white" px={2}>
            Cognome
          </FormControl.Label>

          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder="Inserisci il tuo Cognome"
              />
            )}
            name="surname"
            rules={{required: true, maxLength: 200}}
          />
        </ZStack>
        {errors.surname && (
          <FormControl.ErrorMessage>
            Inserisci un cognome valido
          </FormControl.ErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={'email' in errors} mt={5}>
        <ZStack reversed={true}>
          <FormControl.Label mx={2} my={-3} bgColor="white" px={2}>
            Email di lavoro
          </FormControl.Label>

          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder="Inserisci la tua email di lavoro"
              />
            )}
            name="email"
            rules={{required: true}}
          />
        </ZStack>
        {errors.email && (
          <FormControl.ErrorMessage>
            Inserisci un cognome valido
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
                InputRightElement={
                  <IconButton
                    mr={3}
                    icon={
                      <Icon
                        size={'xl'}
                        as={MaterialCommunityIcons}
                        name={'eye'}
                        color="primary.400"
                      />
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
      <FormControl isInvalid={'passwordConfirm' in errors} mt={5}>
        <ZStack reversed={true}>
          <FormControl.Label mx={2} my={-3} bgColor="white" px={2}>
            Conferma password
          </FormControl.Label>

          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <Input
                InputRightElement={
                  <IconButton
                    mr={3}
                    icon={
                      <Icon
                        size={'xl'}
                        as={MaterialCommunityIcons}
                        name={'eye'}
                        color="primary.400"
                      />
                    }
                    size={35}
                    onPress={() => setShowPassword(!showPassword)}
                  />
                }
                type={showPassword ? 'text' : 'password'}
                value={value}
                onChangeText={onChange}
                placeholder="Conferma la tua password"
              />
            )}
            name="passwordConfirm"
            rules={{required: true, maxLength: 200}}
          />
        </ZStack>
        {errors.passwordConfirm && (
          <FormControl.ErrorMessage>
            Inserisci una conferma password valida
          </FormControl.ErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={'privacyPolicy' in errors} mt={5}>
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <HStack>
              <Checkbox
                mr={5}
                value={value}
                size={'lg'}
                onChange={onChange}
                accessibilityLabel="privacyCheck"
              />
              <Text>Ho letto, compreso e accetto l’</Text>
              <Link
                _text={{
                  fontWeight: 'semibold',
                  color: 'primary.400',
                }}
                onPress={privacyPolicyPressFn}>
                informativa sulla privacy
              </Link>
            </HStack>
          )}
          name="privacyPolicy"
          rules={{required: true, maxLength: 200}}
        />
        {errors.privacyPolicy && (
          <FormControl.ErrorMessage>
            Valida l'informativa
          </FormControl.ErrorMessage>
        )}
      </FormControl>
      <VStack mt={5}>
        <Button onPress={handleSubmit(onRegistration)}>Registrati</Button>
        <Button variant={'link'} onPress={backButtonFn}>
          Indietro
        </Button>
      </VStack>
    </VStack>
  );
};

export default RegisterForm;
