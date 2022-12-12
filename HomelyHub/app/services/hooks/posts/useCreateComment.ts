import {useMutation} from '@tanstack/react-query';
import {RNQueryClient} from '../../react-query/query-client';
import {CreatePostCommentApiRequest, PostsService} from '../../rest';

const createComment = async ({comment, postId}: any) => {
  console.log(JSON.stringify(comment));

  const postComment: CreatePostCommentApiRequest = {
    postId: postId,
    text: comment.text,
  };

  console.log(JSON.stringify(postComment));

  return await PostsService.postsCreateComment(postComment);
};

export const useCreateComment = () => {
  return useMutation(createComment, {
    onSuccess: data => {
      const key = 'comment-' + data.postId!.toString();
      RNQueryClient.invalidateQueries([key]);
    },
  });
};
