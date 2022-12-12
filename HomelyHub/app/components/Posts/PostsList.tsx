import {StyleSheet, View, VirtualizedList} from 'react-native';
import React from 'react';
import {Post} from '../../model/post';
import PostItem from './PostItem';
import {Box, Skeleton} from 'native-base';
import EmptyContent from '../Layout/EmptyContent';
type PostsListProps = {
  posts?: Post[];
  isLoading?: boolean;
};
const PostsList = ({posts, isLoading}: PostsListProps) => {
  const getItem = (data: Post[], index: number) => {
    if (posts) {
      return posts[index];
    }
    return null;
  };

  const getItemCount = (data: Post[]) => data?.length;

  return (
    <Box paddingX={2} flex={1} style={styles.container}>
      {isLoading ? (
        <View>
          <Skeleton height={200} />
        </View>
      ) : (
        <VirtualizedList<Post>
          data={posts}
          initialNumToRender={4}
          ListEmptyComponent={() => (
            <EmptyContent
              text="Non sono presenti pubblicazioni"
              image={require('../../assets/illustrations/emptyconversations.png')}
            />
          )}
          renderItem={post => <PostItem withActions post={post.item} />}
          keyExtractor={item => item.id.toString()}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      )}
    </Box>
  );
};

export default PostsList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
