import {useQuery} from '@tanstack/react-query';
import {Post} from '../../../model/post';
import {queryKeys} from '../../react-query/constants';
import {
  PostsService,
  PaginationListApiResponseOfListOfPostApiResponse,
} from '../../rest';

const fetchPosts = async () => {
  return await PostsService.postsPosts(null, null, null, null, 1000);
};

export const useGetPosts = (categoryids?: any, name?: string) => {
  return useQuery({
    queryKey: [queryKeys.posts, {all: true}],
    queryFn: fetchPosts,
    select: (data: PaginationListApiResponseOfListOfPostApiResponse) => {
      return mapItems(data, categoryids, name);
    },
  });
};

const fetchMyPosts = async () => {
  return await PostsService.postsMyPosts();
};

export const useGetMyPosts = (categoryids?: any) => {
  return useQuery({
    queryKey: [queryKeys.posts, {mine: true}],
    queryFn: fetchMyPosts,
    select: (data: PaginationListApiResponseOfListOfPostApiResponse) => {
      return mapItems(data, categoryids);
    },
  });
};

const reportedPosts = async () => {
  return await PostsService.postsReports();
};
export const useGetMyReportedPosts = (categoryids?: any) => {
  return useQuery({
    queryKey: [queryKeys.posts, {reported: true}],
    queryFn: reportedPosts,
    select: (data: PaginationListApiResponseOfListOfPostApiResponse) => {
      return mapItems(data, categoryids);
    },
  });
};

const fetchDeletedPosts = async () => {
  return await PostsService.postsCancelled();
};
export const useGetMyDeletedPosts = (categoryids?: any) => {
  return useQuery({
    queryKey: [queryKeys.posts, {deleted: true}],
    queryFn: fetchDeletedPosts,
    select: (data: PaginationListApiResponseOfListOfPostApiResponse) => {
      return mapItems(data, categoryids);
    },
  });
};

const mapItems = (
  data: PaginationListApiResponseOfListOfPostApiResponse,
  categoryids?: any,
  name?: string,
) => {
  let items = data.items;
  if (categoryids) {
    items = items?.filter(u => categoryids.includes(u.subCategoryId));
  }
  if (name) {
    items = items?.filter(
      u => u.name?.includes(name) || u.description?.includes(name),
    );
  }
  return items?.map(
    postResponse =>
      <Post>{
        title: postResponse.name,
        typeDescription: postResponse.type,
        bookmarked: false,
        liked: postResponse.subjectPostInfo?.isLike,
        description: postResponse.description,
        id: postResponse.id,
        city: postResponse.address?.city,
        category: postResponse.subCategory?.id,
        categoryDescription: postResponse.subCategory?.category?.name,
        date: postResponse.startDate?.date,
        creatorId: postResponse.createdBy?.id,
        expired: postResponse.expired,
      },
  );
};
