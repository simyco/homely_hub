import {useQuery} from '@tanstack/react-query';
import {IMessage} from 'react-native-gifted-chat';
import {queryKeys} from '../../react-query/constants';
import {
  PaginationListApiResponseOfListOfPostCommentsApiResponse,
  PostsService,
} from '../../rest';

const fetchComments = async (id: number) => {
  return await PostsService.postsComments(id);
};

export const useGetComments = (postId: number) => {
  return useQuery({
    queryKey: [queryKeys.comment, postId],
    queryFn: () => fetchComments(postId),
    select: (
      comments: PaginationListApiResponseOfListOfPostCommentsApiResponse,
    ) =>
      comments.items?.map(
        comment =>
          <IMessage>{
            _id: comment.id,
            text: comment.actualText,
            createdAt: new Date(comment.createdAt!),
            user: {
              _id: comment.sender?.id,
              avatar: comment.sender?.avatar,
            },
          },
      ),
  });
};
