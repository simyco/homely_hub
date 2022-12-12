import {Heading, View, VStack} from 'native-base';
import React from 'react';
import {PostsList} from '../../components/Posts';
import {useGetMyReportedPosts} from '../../services/hooks/posts/useGetPosts';

export const ReportedPosts = () => {
  const {data: postsReported, isLoading: loadingPostActives} =
    useGetMyReportedPosts();

  return (
    <View bgColor={'white'} flex="1">
      <VStack space={5} px={5} my={5}>
        <Heading size={'lg'}>Post segnalati</Heading>
      </VStack>
      <PostsList posts={postsReported} isLoading={loadingPostActives} />
    </View>
  );
};

export default ReportedPosts;
