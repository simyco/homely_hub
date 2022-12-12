import {Box, HStack, Input, SearchIcon, Skeleton, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {Spacer} from '../../../components/Layout';
import {Category} from '../../../model/category';
import {useGetCategories} from '../../../services/hooks/categories/useGetCategories';
import {CategoryButton} from './CategoryButton';
import {SubCategoryButton} from './SubCategoryButton';

export type PostsHeaderSectionProps = {
  onSearch?: (name?: string) => void;
  onChangeCategories?: (categoriesIds?: number[]) => void;
};
export const PostsHeaderSection = ({
  onChangeCategories,
  onSearch,
}: PostsHeaderSectionProps) => {
  const [category, setCategory] = useState<Category | null>();
  const {data: categories, isLoading} = useGetCategories();
  const [categoriesHome, setCategoriesHome] = useState(categories);
  useEffect(() => {
    setCategoriesHome(categories);
  }, [categories]);
  useEffect(() => {
    if (category) {
      if (
        categoriesHome?.filter(c => c.active).length === 1 &&
        categoriesHome?.some(c => c.id === category.id && c.active)
      ) {
        const categoriesPatched = categoriesHome?.map(el => ({
          ...el,
          active: true,
        }));
        setCategoriesHome(categoriesPatched);
        setCategory(null);
      } else {
        const categoriesPatched = categoriesHome?.map(el =>
          el.id !== category?.id
            ? {...el, active: false}
            : {...el, active: true},
        );
        setCategoriesHome(categoriesPatched);
      }
      onChangeCategories && onChangeCategories();
    }
  }, [category]);
  const onChangeSearch = (query: string) => {
    onSearch && onSearch(query);
  };

  return (
    <Box paddingX={2}>
      <VStack w="100%" space={1} alignSelf="center">
        <Input
          placeholder="Cerca in tutte le categorie"
          width="100%"
          borderRadius="4"
          rounded={'xl'}
          py="3"
          px="1"
          fontSize="18"
          onChangeText={onChangeSearch}
          variant={'outline'}
          bgColor={'white'}
          InputLeftElement={
            <SearchIcon m="2" ml="3" size="6" color="gray.400" />
          }
        />
      </VStack>

      {isLoading ? (
        <HStack space={5} my={2}>
          <Skeleton height={70} width={70} rounded="full" />
          <Skeleton height={70} width={70} rounded="full" />
          <Skeleton height={70} width={70} rounded="full" />
          <Skeleton height={70} width={70} rounded="full" />
        </HStack>
      ) : (
        <VStack space={5} my={2}>
          <FlatList
            data={categoriesHome}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <Spacer width={10} />}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <CategoryButton
                active={item.active}
                text={item.name}
                onPress={() => {
                  setCategory(item);
                }}
                icon={item.icon}
              />
            )}
          />
          {category && (
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={category.subcategories}
              horizontal={true}
              ItemSeparatorComponent={() => <Spacer width={10} />}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => <SubCategoryButton text={item.name} />}
            />
          )}
        </VStack>
      )}
    </Box>
  );
};
