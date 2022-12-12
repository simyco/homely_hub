import {useMutation} from '@tanstack/react-query';
import {RNQueryClient} from '../../react-query/query-client';
import {PostsService} from '../../rest';

const deletePost = async (postId: number) => {
  return await PostsService.postsDeletePost(postId);
};

export const useDeletePost = () => {
  return useMutation(deletePost, {
    onSuccess: () => {
      RNQueryClient.invalidateQueries(['posts']);
    },
  });
};
