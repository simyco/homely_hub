import {FlatList} from 'react-native';
import React from 'react';

import {ConversationItem} from './ConversationItem';
import EmptyContent from '../Layout/EmptyContent';
import {useGetConversations} from '../../services/hooks/conversations/useGetConversations';
import {Box, Skeleton, View} from 'native-base';
import {Conversation} from '../../model/conversation';
export type ConversationListProps = {
  stringQuery?: string;
};
export const ConversationList = ({stringQuery}: ConversationListProps) => {
  const {data: messages, isLoading} = useGetConversations();
  console.log(messages);
  return (
    <Box flex={1}>
      {isLoading ? (
        <View>
          <Skeleton height={100} />
        </View>
      ) : (
        <FlatList
          data={filterNotifications(stringQuery, messages)}
          ListEmptyComponent={() => (
            <EmptyContent
              text="Non sono presenti nuovi messaggi!"
              image={require('../../assets/illustrations/emptyconversations.png')}
            />
          )}
          keyExtractor={(item, index) => item.id + index}
          renderItem={({item, index}) => (
            <ConversationItem index={index} conversation={item} />
          )}
        />
      )}
    </Box>
  );
};

const filterNotifications = (
  stringQuery?: string,
  conversations?: Conversation[],
) => {
  if (stringQuery) {
    return conversations?.filter(c => c.user?.name.includes(stringQuery));
  }
  return conversations;
};
