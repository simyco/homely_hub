import {queryKeys} from './../../react-query/constants';
import {ConversationsService} from '../../rest/services/ConversationsService';
import {useQuery} from '@tanstack/react-query';
import moment from 'moment';
import {Conversation} from '../../../model/conversation';
import {GetConversationApiResponse} from '../../rest/models/GetConversationApiResponse';

const fetchConversation = async (conversationId: number) => {
  return await ConversationsService.conversationsConversation(conversationId);
};

export const useGetConversation = (conversationId: number) => {
  return useQuery({
    queryKey: [queryKeys.conversation, conversationId],
    queryFn: () => fetchConversation(conversationId),
    select: (conversation: GetConversationApiResponse) =>
      <Conversation>{
        dateLastMessage: moment(conversation.dateLastMessage).toDate(),
        id: conversation.id?.toString(),
        lastMessage: conversation.lastMessage?.body,
        user: {
          id: conversation.subject?.id,

          name:
            conversation.subject?.name + ' ' + conversation.subject?.surname,
          avatar: conversation.subject?.avatar,
        },
      },
    onSuccess(data) {
      console.log(data);
    },
  });
};
