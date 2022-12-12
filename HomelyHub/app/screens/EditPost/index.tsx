import React from 'react';
import {ScreenWrapper} from '../../components/Layout';
import {Box} from 'native-base';
import CreatePostForm from '../CreatePost/CreatePostForm';
import {useGetPost} from '../../services/hooks/posts/useGetPost';

const EditPost = ({route}: any) => {
  const {postId} = route.params;
  const {data: post, isLoading} = useGetPost(postId);

  return (
    <ScreenWrapper style={{paddingTop: 0}}>
      <Box mx={2} px={3} rounded="md" shadow={2} bgColor={'white'}>
        {isLoading ? <></> : <CreatePostForm post={post} />}
      </Box>
    </ScreenWrapper>
  );
};

export default EditPost;
