import {Box, Center, Heading, HStack, Text, View, VStack} from 'native-base';
import React from 'react';
import {FlatList} from 'react-native';
import EmptyContent from '../../components/Layout/EmptyContent';
import {Category} from '../../model/category';
import {CategoryButton} from '../Home/components';

export const BlockedUsers = () => {
  const Item = ({name, icon}: Category) => (
    <HStack space={10} bgColor="white" rounded={'lg'} shadow="1" p={2}>
      <CategoryButton icon={icon} text={name} />
      <Center flex={1}>
        <Text>
          Clicca per il <Text fontWeight={'bold'}>tutorial</Text> dedicato alla
          categoria <Text fontWeight={'bold'}>{name?.toUpperCase()}</Text>
        </Text>
      </Center>
    </HStack>
  );

  return (
    <View bgColor={'white'} flex="1">
      <VStack space={5} px={5} my={5}>
        <Heading size={'lg'}>Utenti bloccati</Heading>
      </VStack>
      <View bgColor={'primary.200'} flex={1} px={5} py={5}>
        <FlatList
          data={[]}
          ListEmptyComponent={() => (
            <EmptyContent
              text="Non ci sono utenti bloccati!"
              image={require('../../assets/illustrations/emptyconversations.png')}
            />
          )}
          numColumns={1}
          ItemSeparatorComponent={() => <Box color={'primary.100'} h={25} />}
          renderItem={category => <Item {...category.item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default BlockedUsers;
