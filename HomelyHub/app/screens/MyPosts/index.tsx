import {Button, Center, Heading, HStack, View, VStack} from 'native-base';
import React, {useState} from 'react';
import {PostsList} from '../../components/Posts';
import {useGetMyPosts} from '../../services/hooks/posts/useGetPosts';

export const MyPosts = () => {
  const [activePosts, setActivePosts] = useState(true);
  const {data: postActives, isLoading: loadingPostActives} = useGetMyPosts();

  return (
    <View bgColor={'white'} flex="1">
      <VStack space={5} px={5} my={5}>
        <Heading size={'lg'}>I miei post</Heading>
        <Center>
          <HStack>
            <Button
              onPress={() => setActivePosts(!activePosts)}
              variant={!activePosts ? 'outline' : 'solid'}
              size={'md'}>
              POST ATTIVI
            </Button>
            <Button
              onPress={() => setActivePosts(!activePosts)}
              variant={activePosts ? 'outline' : 'solid'}
              size={'md'}>
              POST SCADUTI
            </Button>
          </HStack>
        </Center>
      </VStack>
      <PostsList
        posts={
          activePosts
            ? postActives?.filter(c => !c.expired)
            : postActives?.filter(c => c.expired)
        }
        isLoading={loadingPostActives}
      />
    </View>
  );
};

export default MyPosts;
