import {Conversation} from './../../../model/conversation';
import {MessagesService} from './../../rest/services/MessagesService';
import {useQuery} from '@tanstack/react-query';
import {PaginationListApiResponseOfListOfGetMessageApiResponse} from '../../rest/models/PaginationListApiResponseOfListOfGetMessageApiResponse';
import {IMessage} from 'react-native-gifted-chat';
import moment from 'moment';
import {ApplicationConstant} from '../../../config/constants';

const fetchMessages = async (conversationId?: string) => {
  return await MessagesService.messagesGetMessage(
    +conversationId!,
    ApplicationConstant.defaultPageSize,
  );
};

export const useGetMessages = (conversation?: Conversation) => {
  console.log('conversationToGet', conversation?.id);
  return useQuery({
    queryKey: ['messages' + conversation?.user?.id, conversation?.id],
    queryFn: () => fetchMessages(conversation?.id),
    enabled: !!conversation,
    select: (
      conversationMessages: PaginationListApiResponseOfListOfGetMessageApiResponse,
    ) =>
      conversationMessages.items?.map(
        message =>
          <IMessage>{
            _id: message.id,
            text: message.body,
            createdAt: message.dateLastMessage
              ? moment(message.dateLastMessage).toDate()
              : moment().toDate(),
            user: {
              _id: message.subject?.id,
              avatar: message.subject?.avatar,
            },
          },
      ),
  });
};
