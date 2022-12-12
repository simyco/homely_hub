import {useMutation} from '@tanstack/react-query';
import {queryKeys} from '../../react-query/constants';
import {RNQueryClient} from '../../react-query/query-client';
import {
  PaginationListApiResponseOfListOfPostApiResponse,
  PostsService,
} from '../../rest';

const unlikePost = async (postId: number) => {
  return await PostsService.postsDeleteLike(postId);
};

export const useUnlikePost = () => {
  return useMutation(unlikePost, {
    onMutate: async id => {
      return await changeLike(id);
    },
    onError: error => {
      console.error(error);
    },
  });
};
const likePost = async (postId: number) => {
  return await PostsService.postsAddToLike(postId);
};

export const useLikePost = () => {
  return useMutation(likePost, {
    onMutate: async id => {
      return await changeLike(id);
    },
    onError: error => {
      console.error(error);
    },
  });
};
async function changeLike(id: number) {
  await RNQueryClient.cancelQueries({
    queryKey: [queryKeys.posts, {all: true}],
  });
  const old = RNQueryClient.getQueryData([queryKeys.posts, {all: true}]);
  console.log('oldposts', old);

  const previousCurrentPost: PaginationListApiResponseOfListOfPostApiResponse =
    JSON.parse(
      JSON.stringify(
        RNQueryClient.getQueryData([queryKeys.posts, {all: true}]),
      ),
    );
  previousCurrentPost.items = previousCurrentPost?.items?.map(el =>
    el.id === id
      ? {
          ...el,
          subjectPostInfo: {
            ...el.subjectPostInfo,
            isLike: !el.subjectPostInfo?.isLike,
          },
        }
      : el,
  );
  RNQueryClient.setQueryData(
    [queryKeys.posts, {all: true}],
    previousCurrentPost,
  );

  // Return context with the optimistic todo
  return {previousCurrentPost};
}
