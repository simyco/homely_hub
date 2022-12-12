import {Linking} from 'react-native';
import React, {useState} from 'react';
import {ScreenWrapper, Spacer} from '../../components/Layout';
import {useAuth} from '../../services/hooks/account/useAuth';

import {
  Avatar,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  Modal,
  Skeleton,
  Text,
  useDisclose,
  useToast,
  VStack,
} from 'native-base';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationService from '../../navigation/NavigationService';
import {useUploadPhotoProfile} from '../../services/hooks/account/useUploadPhotoProfile';
import {useRefreshOnFocus} from '../../utils/hooks/useRefreshOnFocus';

const Settings = () => {
  const {user, refetchUser} = useAuth();
  useRefreshOnFocus(refetchUser);

  const {mutateAsync, isLoading} = useUploadPhotoProfile();
  const {isOpen, onOpen, onClose} = useDisclose();
  const [avatar, setAvatar] = useState(user?.imageUrl);

  const toast = useToast();
  const {
    isOpen: isOpenSuspend,
    onOpen: onOpenSuspend,
    onClose: onCloseSuspend,
  } = useDisclose();

  return (
    <ScreenWrapper withScrollView style={{paddingTop: 0}}>
      <SuspendUserModal isOpen={isOpenSuspend} onClose={onCloseSuspend} />
      <DeleteUserModal isOpen={isOpen} onClose={onClose} />
      <VStack p={5}>
        <Center>
          {isLoading ? (
            <Skeleton height={120} width={120} rounded="full" />
          ) : (
            <Avatar size={'2xl'} source={{uri: avatar}} />
          )}
        </Center>
        <Spacer height={30} />
        <HStack space={5} justifyContent="center">
          <VStack space={3} alignItems={'center'}>
            <IconButton
              isDisabled={isLoading}
              icon={
                <Icon
                  size={'xl'}
                  as={MaterialCommunityIcons}
                  name={'pencil'}
                  color="coolGray.800"
                />
              }
              size={35}
              onPress={async () => {
                // const results = await ImagePicker.openPicker({
                //   width: 200,
                //   height: 200,
                //   cropping: true,
                //   mediaType: 'photo',
                //   includeBase64: true,
                //   cropperCircleOverlay: true,
                //   compressImageQuality: 0.4,
                // });
                // try {
                //   if (results.data) {
                //     const uploadedImage = await mutateAsync(results.data);
                //     setAvatar(uploadedImage.avatar);
                //     RNQueryClient.invalidateQueries(['auth-user']);
                //     toast.show({
                //       render: () => {
                //         return (
                //           <ToastBox>
                //             <Text>
                //               La tua immagine profilo è stata aggiornata con
                //               successo.
                //             </Text>
                //           </ToastBox>
                //         );
                //       },
                //       placement: 'bottom',
                //       duration: 2000,
                //     });
                //   }
                // } catch (error) {
                //   Alert.alert(error + 'Unable to resize the photo');
                // }
              }}
            />
            <Text fontSize={12}>Modifica</Text>
          </VStack>
          <VStack space={3} alignItems="center">
            <IconButton
              isDisabled={isLoading}
              icon={
                <Icon
                  size={'xl'}
                  as={MaterialCommunityIcons}
                  name={'lock'}
                  color="coolGray.800"
                />
              }
              size={35}
              onPress={() => {
                NavigationService.navigate('ChangePassword');
              }}
            />

            <Text fontSize={12}>Cambia password</Text>
          </VStack>
          <VStack space={3} alignItems="center">
            <IconButton
              isDisabled={isLoading}
              icon={
                <Icon
                  size={'xl'}
                  as={MaterialCommunityIcons}
                  name={'delete'}
                  color="coolGray.800"
                />
              }
              size={35}
              onPress={() => console.log('Pressed')}
            />

            <Text fontSize={12}>Elimina</Text>
          </VStack>
        </HStack>
        <VStack mt={'5'} space={2}>
          <Divider />
          <Spacer height={30} />
          <Text>Assistenza</Text>
          <Text>
            Per qualsiasi necessità non esitare a contattare il nostro servizio
            di assistenza
          </Text>
          <HStack space={5}>
            <HStack space={2} flexWrap={'wrap'}>
              <Icon
                size={'lg'}
                as={MaterialCommunityIcons}
                name={'email'}
                color="primary.400"
              />
              <Link
                onPress={() => Linking.openURL('mailto:assistenza@wlb.it')}
                _text={{
                  color: 'primary.400',
                  fontSize: 'md',
                }}>
                assistenza@wlb.it
              </Link>
            </HStack>
            <Link
              onPress={() => {
                NavigationService.navigate('Privacy');
              }}
              _text={{
                color: 'primary.400',
                fontSize: 'md',
              }}>
              Informativa sulla privacy
            </Link>
          </HStack>

          <Spacer height={30} />
          <Divider />
        </VStack>
        <Spacer height={50} />
        <VStack space={1}>
          <Button onPress={onOpenSuspend}>SOSPENDI ACCOUNT</Button>
          <Button variant={'outline'} onPress={onOpen}>
            ELIMINA ACCOUNT
          </Button>
        </VStack>
      </VStack>
    </ScreenWrapper>
  );
};

export default Settings;
const SuspendUserModal = ({isOpen, onClose}: any) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content>
        <Modal.Body>
          <VStack space={5}>
            <Center>
              <Image
                flex={1}
                alt="delete"
                resizeMode="contain"
                size={'xl'}
                source={require('../../assets/images/delete_post.png')}
              />
            </Center>
            <Center>
              <Heading>SOSPENDIAMO?</Heading>
              <Text textAlign={'center'}>Vuoi sospendere il tuo utente?</Text>
            </Center>
            <Button
              // isLoading={deletePostLoading}
              onPress={async () => {
                // const deletedPost = await deletePostAsync(post.id);
                // if (deletedPost) {
                // }
                // toast.show({
                //   render: () => {
                //     return (
                //       <ToastBox>
                //         <Text>
                //           Il tuo annuncio è stato eliminato con successo.
                //         </Text>
                //       </ToastBox>
                //     );
                //   },
                //   placement: 'bottom',
                // });
                onClose();
              }}>
              SOSPENDI UTENTE
            </Button>
            <Center>
              <Link onPress={onClose}>Annulla</Link>
            </Center>
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

const DeleteUserModal = ({isOpen, onClose}: any) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content>
        <Modal.Body>
          <VStack space={5}>
            <Center>
              <Image
                flex={1}
                alt="delete"
                resizeMode="contain"
                size={'xl'}
                source={require('../../assets/images/delete_post.png')}
              />
            </Center>
            <Center>
              <Heading>Eliminiamo?</Heading>
              <Text textAlign={'center'}>
                Vuoi eliminare il tuo utente? La scelta è irreversibile
              </Text>
            </Center>
            <Button
              // isLoading={deletePostLoading}
              onPress={async () => {
                // const deletedPost = await deletePostAsync(post.id);
                // if (deletedPost) {
                // }
                // toast.show({
                //   render: () => {
                //     return (
                //       <ToastBox>
                //         <Text>
                //           Il tuo annuncio è stato eliminato con successo.
                //         </Text>
                //       </ToastBox>
                //     );
                //   },
                //   placement: 'bottom',
                // });
                onClose();
              }}>
              ELIMINA UTENTE
            </Button>
            <Center>
              <Link onPress={onClose}>Annulla</Link>
            </Center>
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
