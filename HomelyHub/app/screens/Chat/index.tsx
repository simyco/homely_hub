import React, {useCallback} from 'react';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import EmptyContent from '../../components/Layout/EmptyContent';
import {
  Avatar,
  Button,
  Center,
  Heading,
  HStack,
  KeyboardAvoidingView,
  Skeleton,
  View,
  VStack,
} from 'native-base';
import {useGetConversation} from '../../services/hooks/conversations/useGetConversation';
import {getInitials} from '../../utils';
import {useGetMessages} from '../../services/hooks/conversations/useGetMessages';
import {useAuth} from '../../services/hooks/account/useAuth';
import {useCreateMessage} from '../../services/hooks/conversations/useCreateMessage';
import {useKeyboardVisible} from '../../utils/hooks/useKeyboardVisible';
import {InputToolbar} from '../../components/Chat/InputToolbar';
import {renderSend} from '../../components/Chat/Send';
import {renderBubbleComment} from '../../components/Chat/BubbleComment';
import {useRefreshOnFocus} from '../../utils/hooks/useRefreshOnFocus';
import {useReportPost} from '../../services/hooks/posts/useReportPost';

const Chat = ({route}: any) => {
  const {conversationId} = route.params;
  console.log('routed to chat with conversationId', conversationId);
  const {user: loggedUser} = useAuth();
  const {mutate} = useCreateMessage();
  const {mutateAsync: reportPostAsync} = useReportPost();
  const isKeyboardOpen = useKeyboardVisible();
  const {
    data: conversation,
    isLoading: loadingConversation,
    refetch,
  } = useGetConversation(conversationId);
  const {data: messages, isLoading: loadingMessages} =
    useGetMessages(conversation);
  useRefreshOnFocus(refetch);
  console.log('Conversation', conversation);
  const onSend = useCallback(
    (messagesToSend: any = []) => {
      console.log('messagestosend', messagesToSend);

      mutate({
        messageBody: messagesToSend[0],
        receiverId: conversation?.user?.id ?? 0,
      });
      console.log('messages', messagesToSend);
    },
    [conversation?.user?.id],
  );

  return (
    <View flex={1}>
      {!isKeyboardOpen && (
        <VStack rounded="lg" px={3} py={3} shadow={1} bgColor={'white'}>
          <HStack space={5} ml={3}>
            {loadingConversation && (
              <Center>
                <Skeleton></Skeleton>
              </Center>
            )}
            {conversation && (
              <Center>
                <Avatar
                  size="sm"
                  source={{
                    uri: conversation.user?.avatar,
                  }}>
                  {getInitials(conversation.user?.name)}
                </Avatar>
              </Center>
            )}
            <Center>
              <Heading size={'md'}>{conversation?.user?.name}</Heading>
            </Center>
          </HStack>

          <Center flexDirection={'row'} ml={3}>
            <Button variant={'link'} size={'lg'}>
              BLOCCA
            </Button>
            <Button variant={'link'} size={'lg'}>
              SEGNALA
            </Button>
          </Center>
        </VStack>
      )}
      <View flex={1} bgColor="white">
        <GiftedChat
          wrapInSafeArea={false}
          messages={messages}
          locale="it-IT"
          placeholder="Scrivi un messaggio..."
          alwaysShowSend
          renderChatEmpty={() => (
            <EmptyContent
              style={{transform: [{scaleY: -1}]}}
              text="Non sono presenti messaggi!"
              image={require('../../assets/illustrations/no_messages.png')}
            />
          )}
          renderBubble={renderBubbleComment}
          renderSend={renderSend}
          loadEarlier={loadingMessages}
          minInputToolbarHeight={70}
          renderInputToolbar={props => {
            return <InputToolbar {...props} />;
          }}
          onSend={(messageToSend: IMessage[]) => onSend(messageToSend)}
          user={{
            _id: loggedUser?.id ?? 0,
            avatar: loggedUser?.imageUrl,
          }}
        />
      </View>
      <KeyboardAvoidingView />
    </View>
  );
};

export default Chat;
