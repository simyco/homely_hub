import {queryKeys} from './../../react-query/constants';
import {ConversationsService} from './../../rest/services/ConversationsService';
import {useQuery} from '@tanstack/react-query';
import moment from 'moment';
import {PaginationListApiResponseOfListOfGetConversationApiResponse} from '../../rest';
import {Conversation} from '../../../model/conversation';

const fetchConversations = async () => {
  return await ConversationsService.conversationsConversations();
};

export const useGetConversations = () => {
  return useQuery({
    queryKey: [queryKeys.conversations],
    queryFn: fetchConversations,

    select: (
      data: PaginationListApiResponseOfListOfGetConversationApiResponse,
    ) =>
      data.items
        ?.map(
          conversation =>
            <Conversation>{
              dateLastMessage: moment(conversation.dateLastMessage).toDate(),
              id: conversation.id?.toString(),
              lastMessage: conversation.lastMessage?.body,
              user: {
                id: conversation.subject?.id,
                name:
                  conversation.subject?.name +
                  ' ' +
                  conversation.subject?.surname,
                avatar: conversation.subject?.avatar,
              },
            },
        )
        .sort(function (a, b) {
          return b.dateLastMessage.getTime() - a.dateLastMessage.getTime();
        }),
  });
};
