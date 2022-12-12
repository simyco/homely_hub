import {MessagesService} from './../../rest/services/MessagesService';
import {useMutation} from '@tanstack/react-query';
import {RNQueryClient} from '../../react-query/query-client';
import {CreateMessageApiRequest} from '../../rest';

const createMessage = async ({messageBody, receiverId}: any) => {
  console.log(JSON.stringify(messageBody));

  const message: CreateMessageApiRequest = {
    subjectId: receiverId,
    text: messageBody.text,
  };

  return await MessagesService.messagesCreateMessage(message);
};

export const useCreateMessage = () => {
  return useMutation(createMessage, {
    onMutate: async data => {
      console.log(data);
      const receiverId = data.receiverId;

      // Cancel current queries for the todos list
      await RNQueryClient.cancelQueries({
        queryKey: ['messages' + receiverId],
      });

      const previousChat = RNQueryClient.getQueryData([
        'messages' + receiverId,
      ]);
      const newChat = JSON.parse(
        JSON.stringify(RNQueryClient.getQueryData(['messages' + receiverId])),
      );
      newChat.items = [
        {
          body: data.messageBody.text,
          dateLastMessage: data.messageBody.createdAt,
          id: data.messageBody._id,
          subject: {
            id: data.messageBody.user._id,
            avatar: data.messageBody.user.avatar,
            name: data.messageBody.user.name,
          },
        },
        ...newChat.items,
      ];

      RNQueryClient.setQueryData(['messages' + receiverId], newChat);
      RNQueryClient.invalidateQueries(['conversations']);
      return {previousChat, receiverId};
    },

    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (err, context) => {
      console.log('error' + err);
      RNQueryClient.setQueryData(
        ['messages' + context.receiverId],
        context.previousChat,
      );
    },
  });
};
