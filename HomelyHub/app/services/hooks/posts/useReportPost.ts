import {queryKeys} from './../../react-query/constants';
import {useMutation} from '@tanstack/react-query';
import {RNQueryClient} from '../../react-query/query-client';
import {PostsService} from '../../rest';

const reportPost = async (postId: number) => {
  return await PostsService.postsReport({postId: postId});
};

export const useReportPost = () => {
  return useMutation(reportPost, {
    onSuccess: () => {
      RNQueryClient.invalidateQueries([
        queryKeys.posts,
        {all: true, reported: true},
      ]);
    },
  });
};
