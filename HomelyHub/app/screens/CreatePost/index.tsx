import React from 'react';
import CreatePostForm from './CreatePostForm';
import {ScreenWrapper} from '../../components/Layout';
import {Box, Card, Heading} from 'native-base';
import {Platform} from 'react-native';

const CreatePost = () => {
  return (
    <ScreenWrapper>
      <Box
        mb={Platform.OS === 'ios' ? 70 : 0}
        mt={2}
        px={3}
        py={4}
        rounded="md"
        shadow={2}
        bgColor={'white'}>
        <Heading size={'xl'}>Nuovo Post</Heading>
        <Heading size={'md'} fontWeight={'normal'}>
          Stai cercando o offrendo il servizio?
        </Heading>
        <CreatePostForm />
      </Box>
    </ScreenWrapper>
  );
};

export default CreatePost;
