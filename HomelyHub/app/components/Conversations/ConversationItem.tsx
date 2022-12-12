import React from 'react';
import moment from 'moment';
import {Conversation} from '../../model/conversation';
import NavigationService from '../../navigation/NavigationService';
import {Avatar, Card, HStack, Pressable, Text, VStack} from 'native-base';
import {getInitials} from '../../utils';

type ConversationItemProps = {
  conversation: Conversation;
  index: number;
};

export const ConversationItem = ({
  conversation,
  index,
}: ConversationItemProps) => {
  return (
    <Pressable
      onPress={() => {
        NavigationService.navigate('Chat', {conversationId: conversation.id});
      }}>
      <Card h={'24'} bgColor={index % 2 === 0 ? 'primary.200' : 'primary.700'}>
        <HStack paddingX={1} space={5}>
          <Avatar
            size="md"
            source={
              conversation.user?.avatar
                ? {
                    uri: conversation.user?.avatar,
                  }
                : require('../../assets/images/avatar.png')
            }>
            {getInitials(conversation.user?.name)}
          </Avatar>
          <VStack flex={1} space="0.5">
            <Text fontWeight={'bold'}>{conversation.user?.name}</Text>
            <Text fontWeight={'light'}>{conversation.lastMessage}</Text>
          </VStack>
          <Text>{moment(conversation.dateLastMessage).fromNow()}</Text>
        </HStack>
      </Card>
    </Pressable>
  );
};
