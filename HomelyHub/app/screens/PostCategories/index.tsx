import {
  Box,
  Center,
  Heading,
  HStack,
  Pressable,
  Text,
  View,
  VStack,
} from 'native-base';
import React from 'react';
import {FlatList} from 'react-native';
import {Category, OnboardingType} from '../../model/category';
import NavigationService from '../../navigation/NavigationService';
import {useGetCategories} from '../../services/hooks/categories/useGetCategories';
import {CategoryButton} from '../Home/components';

export const PostCategories = () => {
  const {data} = useGetCategories();
  const Item = ({name, icon}: Category) => (
    <Pressable
      onPress={() => {
        let category = OnboardingType.Base;
        switch (name) {
          case 'Casa':
            category = OnboardingType.House;
            break;
          case 'Svago':
            category = OnboardingType.Hobby;
            break;
          case 'Cura':
            category = OnboardingType.Health;
            break;
          case 'Famiglia':
            category = OnboardingType.Family;
            break;

          default:
            break;
        }
        NavigationService.navigate('Onboarding', {
          onboardingType: category,
        });
      }}>
      <HStack space={10} bgColor="white" rounded={'lg'} shadow="1" p={2}>
        <CategoryButton icon={icon} text={name} />
        <Center flex={1}>
          <Text>
            Clicca per il <Text fontWeight={'bold'}>tutorial</Text> dedicato
            alla categoria{' '}
            <Text fontWeight={'bold'}>{name?.toUpperCase()}</Text>
          </Text>
        </Center>
      </HStack>
    </Pressable>
  );

  return (
    <View bgColor={'white'} flex="1">
      <VStack space={5} px={5} my={5}>
        <Heading size={'lg'}>Categorie post</Heading>
      </VStack>
      <View bgColor={'primary.200'} flex={1} px={5} py={5}>
        <FlatList
          data={data}
          numColumns={1}
          ItemSeparatorComponent={() => <Box color={'primary.100'} h={25} />}
          renderItem={category => <Item {...category.item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default PostCategories;
