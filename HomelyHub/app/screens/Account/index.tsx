import {Box, Icon, Text} from 'native-base';
import React from 'react';
import {Dimensions, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {ScreenWrapper} from '../../components/Layout';
import {Spacer} from '../../components/Layout/Spacer';
import {OnboardingType} from '../../model/category';
import NavigationService from '../../navigation/NavigationService';
import {useAuth} from '../../services/hooks/account/useAuth';

export type GridItem = {
  id: string;
  title: string;
  icon: string;
  style: 'light' | 'dark';
  navigationFn: () => void;
};
export type ItemProps = {
  item: GridItem;
  index: number;
};

export const Account = () => {
  const {logout} = useAuth();
  const ELEMENTS: GridItem[] = [
    {
      navigationFn: () => {
        NavigationService.navigate('MyPosts');
      },
      id: '1',
      icon: 'layers-triple',
      title: 'I miei post',
      style: 'light',
    },
    {
      navigationFn: () => {
        NavigationService.navigate('ReportedPosts');
      },
      id: '10',
      icon: 'alert-circle-outline',
      title: 'Le mie segnalazioni',
      style: 'dark',
    },
    {
      navigationFn: () => {
        NavigationService.navigate('CategoriesPost');
      },
      id: '6',
      icon: 'grid',
      title: 'Categorie post',
      style: 'dark',
    },
    {
      navigationFn: () => {
        NavigationService.navigate('ManageNotifications');
      },
      id: '4',
      icon: 'bell',
      title: 'Gestione notifiche',
      style: 'light',
    },
    {
      navigationFn: () => {
        NavigationService.navigate('Onboarding', {
          onboardingType: OnboardingType.Base,
        });
      },
      id: '50',
      icon: 'scale-balance',
      title: 'Conciliazione lavoro e vita privata',
      style: 'light',
    },

    {
      navigationFn: () => {
        NavigationService.navigate('DeletedPosts');
      },
      id: '3',
      icon: 'delete',
      title: 'Post eliminati',
      style: 'dark',
    },
    {
      navigationFn: () => {
        NavigationService.navigate('BlockedUsers');
      },
      id: '3',
      icon: 'cancel',
      title: 'Utenti bloccati',
      style: 'dark',
    },

    {
      navigationFn: () => {
        NavigationService.navigate('Settings');
      },
      id: '7',
      icon: 'account-settings-outline',
      title: 'Impostazioni',
      style: 'light',
    },
    {
      navigationFn: () => {
        logout();
      },
      id: '8',
      icon: 'logout',
      title: "Esci dall'account",
      style: 'light',
    },
  ];
  const {width} = Dimensions.get('window');

  const styles = StyleSheet.create({
    listWrapper: {
      justifyContent: 'space-between',
    },
    item: {
      height: width / 2.8,
      width: '48%',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    itemTextEven: {
      fontSize: 18,
      textAlign: 'center',
    },
    itemTextOdd: {
      fontSize: 18,
      textAlign: 'center',
    },
  });
  const Item = ({item}: ItemProps) => (
    <TouchableOpacity onPress={item.navigationFn}>
      <Icon
        mr={3}
        size={'xl'}
        name={item.icon}
        color={item.style === 'dark' ? 'primary.600' : 'white'}
      />

      <Spacer height={10} />
      <Text
        px={3}
        style={
          item.style === 'dark' ? styles.itemTextOdd : styles.itemTextEven
        }>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper withScrollView={false}>
      <Box px={2}>
        <FlatList
          data={ELEMENTS}
          columnWrapperStyle={styles.listWrapper}
          numColumns={2}
          ItemSeparatorComponent={() => <Spacer height={15} width={15} />}
          renderItem={item => <Item {...item} />}
          keyExtractor={item => item.id}
        />
      </Box>
    </ScreenWrapper>
  );
};

export default Account;
