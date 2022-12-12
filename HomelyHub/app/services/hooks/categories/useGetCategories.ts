import {queryKeys} from './../../react-query/constants';
import {useQuery} from '@tanstack/react-query';
import {Category, SubCategory} from '../../../model/category';
import {
  CategoriesApiResponse,
  CategoriesService,
  FlatCategoriesResponse,
} from '../../rest';

const fetchCategories = async () => {
  return await CategoriesService.categoriesCategories();
};

export const useGetCategories = () => {
  return useQuery({
    queryKey: [queryKeys.categories],
    queryFn: fetchCategories,
    select: (data: CategoriesApiResponse[]) => {
      return data.map(
        categoryDto =>
          <Category>{
            name: categoryDto.name,
            icon: '',
            id: categoryDto.id?.toString(),
            active: true,
            subcategories: categoryDto.subCategories?.map(
              subcategory =>
                <SubCategory>{
                  id: subcategory.id?.toString(),
                  active: true,
                  name: subcategory.name,
                },
            ),
          },
      );
    },
  });
};

const fetchAllCategories = async () => {
  return await CategoriesService.categoriesSubCategories();
};

export const useGetCategoriesAll = () => {
  return useQuery({
    queryKey: [queryKeys.categories, {flat: true}],
    queryFn: fetchAllCategories,
    select: (data: FlatCategoriesResponse[]) =>
      data.map(
        categoryDto =>
          <Category>{
            name: categoryDto.name,
            icon: '',
            parentId: categoryDto.parentId?.toString(),
            id: categoryDto.id?.toString(),
            active: true,
          },
      ),
  });
};
