import {useMutation} from '@tanstack/react-query';
import moment from 'moment';
import {PostForm} from '../../../model/post';
import {RNQueryClient} from '../../react-query/query-client';
import {CreatePostApiRequest, PostsService} from '../../rest';

const getDate = (date?: string, hours?: string) => {
  if (!date && !hours) {
    return '';
  }
  return moment(moment(date).format('YYYY-MM-DD')).format(
    'YYYY-MM-DDTHH:mm:ss[Z]',
  );
};

const createPost = async (post: PostForm) => {
  const postCreation: CreatePostApiRequest = {
    description: post.description,
    startDate: getDate(post.dueDate, post.hours),
    endDate: getDate(post.dueDate, post.hours),
    name: post.name,
    subCategoryId: post.subCategoryId ? +post.subCategoryId : 0,
    type: post.type,
    city: post.place,
    time: post.hours,
  };
  return await PostsService.postsCreatePost(postCreation);
};

export const useCreatePost = () => {
  return useMutation(createPost, {
    onSuccess: () => {
      RNQueryClient.invalidateQueries(['posts']);
    },
  });
};
