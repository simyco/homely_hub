import {StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import {PostItem} from '../../components/Posts';
import {useGetPost} from '../../services/hooks/posts/useGetPost';
import {useCreateComment} from '../../services/hooks/posts/useCreateComment';
import {useGetComments} from '../../services/hooks/posts/useGetComments';
import {useAuth} from '../../services/hooks/account/useAuth';
import {renderBubble} from '../../components/Chat/Bubble';
import {InputToolbar} from '../../components/Chat/InputToolbar';
import {renderSend} from '../../components/Chat/Send';
import {Box, View} from 'native-base';

const styles = StyleSheet.create({
  screen: {
    paddingTop: 5,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flex: 1,
    flexDirection: 'column',
  },
  search: {
    paddingHorizontal: 10,
  },
  avatar: {
    width: 50,
    marginLeft: 5,
  },
});

const PostDetail = ({route}: any) => {
  const {postId} = route.params;
  const {user} = useAuth();
  const {data: comments} = useGetComments(postId);
  const {mutate} = useCreateComment();
  const {data: post} = useGetPost(postId);
  const onSend = useCallback(
    (messagesToSend: any = []) => {
      console.log('messagestosend', messagesToSend);

      mutate({comment: messagesToSend[0], postId: postId});
      console.log('messages', messagesToSend);
    },
    [postId, mutate],
  );
  return (
    <View style={styles.screen} bgColor="white">
      {post && <PostItem post={post} />}
      <GiftedChat
        wrapInSafeArea={false}
        messages={comments}
        locale="it-IT"
        placeholder="Scrivi un commento..."
        alwaysShowSend
        minInputToolbarHeight={70}
        renderBubble={renderBubble}
        renderInputToolbar={props => {
          return <InputToolbar {...props} />;
        }}
        renderSend={renderSend}
        onSend={(messageToSend: IMessage[]) => onSend(messageToSend)}
        user={{
          _id: user?.id ?? 0,
        }}
      />
    </View>
  );
};

export default PostDetail;
