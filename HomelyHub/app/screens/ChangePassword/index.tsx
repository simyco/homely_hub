import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {ScreenWrapper} from '../../components/Layout';
import {
  Button,
  Center,
  FormControl,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  VStack,
  ZStack,
} from 'native-base';

import {ChangePasswordForm} from '../../model/user';
import {useChangePassword} from '../../services/hooks/account/useChangePassword';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {mutateAsync, isLoading} = useChangePassword();
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<ChangePasswordForm>({mode: 'onSubmit'});

  const onChangePassword = async (data: ChangePasswordForm) => {
    await mutateAsync(data);
    console.log(data);
  };
  return (
    <ScreenWrapper withScrollView>
      <VStack p={5} space={5}>
        <Center>
          <Image
            alt={'logo'}
            size="xl"
            source={require('../../assets/illustrations/changepassword.png')}
          />
        </Center>
        <Heading size={'xl'}>Cambia password</Heading>
        <FormControl isInvalid={'password' in errors}>
          <ZStack reversed={true}>
            <FormControl.Label mx={2} my={-3} bgColor="white" px={2}>
              Password attuale
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
                      as={MaterialCommunityIcons}
                      name={'lock'}
                      color="primary.600"
                    />
                  }
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
              name="passwordNewConfirm"
              rules={{required: true, maxLength: 200}}
            />
          </ZStack>
          {errors.passwordNewConfirm && (
            <FormControl.ErrorMessage>
              Inserisci una password valida
            </FormControl.ErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={'password' in errors}>
          <ZStack reversed={true}>
            <FormControl.Label mx={2} my={-3} bgColor="white" px={2}>
              Nuova Password
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
                      as={MaterialCommunityIcons}
                      name={'lock'}
                      color="primary.600"
                    />
                  }
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
              name="passwordNewConfirm"
              rules={{required: true, maxLength: 200}}
            />
          </ZStack>
          {errors.passwordNewConfirm && (
            <FormControl.ErrorMessage>
              Inserisci una password valida
            </FormControl.ErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={'password' in errors}>
          <ZStack reversed={true}>
            <FormControl.Label mx={2} my={-3} bgColor="white" px={2}>
              Conferma nuova password
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
                      as={MaterialCommunityIcons}
                      name={'lock'}
                      color="primary.600"
                    />
                  }
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
              name="passwordNewConfirm"
              rules={{required: true, maxLength: 200}}
            />
          </ZStack>
          {errors.passwordNewConfirm && (
            <FormControl.ErrorMessage>
              Inserisci una password valida
            </FormControl.ErrorMessage>
          )}
        </FormControl>

        <Button
          isLoading={isLoading}
          _text={{
            fontSize: 'xl',
            textTransform: 'uppercase',
          }}
          bg={'primary.400'}
          onPress={handleSubmit(onChangePassword)}>
          Conferma
        </Button>
      </VStack>
    </ScreenWrapper>
  );
};

export default ChangePassword;
