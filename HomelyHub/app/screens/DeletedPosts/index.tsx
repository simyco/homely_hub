import {Heading, View, VStack} from 'native-base';
import React from 'react';
import {PostsList} from '../../components/Posts';
import {useGetMyDeletedPosts} from '../../services/hooks/posts/useGetPosts';

export const DeletedPosts = () => {
  const {data: postsDeleted, isLoading: loadingPostActives} =
    useGetMyDeletedPosts();

  return (
    <View bgColor={'white'} flex="1">
      <VStack space={5} px={5} my={5}>
        <Heading size={'lg'}>Post eliminati</Heading>
      </VStack>
      <PostsList posts={postsDeleted} isLoading={loadingPostActives} />
    </View>
  );
};

export default DeletedPosts;
