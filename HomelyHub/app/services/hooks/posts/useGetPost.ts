import {useQuery} from '@tanstack/react-query';
import {Post} from '../../../model/post';
import {queryKeys} from '../../react-query/constants';
import {PostsService, PostResponse} from '../../rest';

const fetchPost = async (postId: number) => {
  return await PostsService.postsPost(postId);
};

export const useGetPost = (postId: number) => {
  return useQuery({
    queryKey: [queryKeys.post, postId],
    queryFn: () => fetchPost(postId),
    select: (postDto: PostResponse) =>
      <Post>{
        title: postDto.name,
        typeDescription: postDto.type,
        bookmarked: false,
        description: postDto.description,
        id: postDto.id,
        city: postDto.address?.city,
        category: postDto.subCategory?.name,
        categoryDescription: postDto.subCategory?.category?.name,
        subCategoryId: postDto.subCategoryId,
        date: postDto.startDate?.date,
        liked: postDto.subjectPostInfo?.isLike,
        creatorId: postDto.createdBy?.id,
        creator: {
          id: postDto.createdBy?.id,
          name: postDto.createdBy?.name,
          avatar: postDto.createdBy?.imageUrl,
        },
      },
  });
};
