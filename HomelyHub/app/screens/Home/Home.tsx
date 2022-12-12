import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import PostsList from '../../components/Posts/PostsList';
import {ScreenWrapper} from '../../components/Layout';
import {PostsHeaderSection} from './components';
import {useGetPosts} from '../../services/hooks/posts/useGetPosts';
import {useRefreshOnFocus} from '../../utils/hooks/useRefreshOnFocus';

const styles = StyleSheet.create({
  screen: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 1,
    flex: 1,
    flexDirection: 'column',
  },
});

const Home = () => {
  const [search, setSearch] = useState<any>();
  const {data: posts, isLoading, refetch} = useGetPosts(null, search);
  useRefreshOnFocus(refetch);

  return (
    <ScreenWrapper style={styles.screen} withScrollView={false}>
      <PostsHeaderSection
        onSearch={input => {
          setSearch(input);
        }}
      />
      <PostsList posts={posts} isLoading={isLoading} />
    </ScreenWrapper>
  );
};

export default Home;
