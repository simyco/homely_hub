import {Box, Heading, HStack, Text, VStack} from 'native-base';
import React from 'react';
import {FlatList} from 'react-native';
import {Spacer} from '../../components/Layout/Spacer';

export type GridItem = {
  id: string;
  title: string;
  enabled: boolean;
};
export type ItemProps = {
  item: GridItem;
  index: number;
};

export const ManageNotifications = () => {
  const ELEMENTS: GridItem[] = [
    {
      id: '1',
      title: 'Nuovo post pubblicato nella categoria FAMIGLIA',
      enabled: false,
    },
    {
      id: '2',
      title: 'Nuovo post pubblicato nella categoria CASA',
      enabled: true,
    },
    {
      id: '3',
      title: 'Nuovo post pubblicato nella categoria CURA',
      enabled: true,
    },
    {
      id: '4',
      title: 'Nuovo post pubblicato nella categoria SVAGO',
      enabled: true,
    },
    {
      id: '5',
      title: 'Nuovo commento ad un annuncio pubblicato',
      enabled: true,
    },
    {
      id: '6',
      title: 'Nuovo commento ad un annuncio che ho commentato',
      enabled: true,
    },
    {
      id: '7',
      title: 'Modifica ad un post commentato',
      enabled: true,
    },
  ];

  const Item = ({item}: ItemProps) => (
    <HStack space={10}>
      <Text flex={1}>{item.title}</Text>
    </HStack>
  );

  return (
    <Box flex={1} bgColor="white">
      <VStack bgColor={'white'} px={5} py={5} space={10}>
        <Heading size={'lg'}>Gestione notifiche</Heading>
        <FlatList
          data={ELEMENTS}
          numColumns={1}
          ItemSeparatorComponent={() => <Spacer height={25} width={16} />}
          renderItem={item => <Item {...item} />}
          keyExtractor={item => item.id}
        />
      </VStack>
    </Box>
  );
};

export default ManageNotifications;
