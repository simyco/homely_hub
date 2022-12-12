import React from 'react';
import {ScreenWrapper} from '../../components/Layout';
import {ConversationList} from '../../components/Conversations';
import {Heading, Input, SearchIcon, VStack} from 'native-base';

const Messages = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);

  return (
    <ScreenWrapper withScrollView={false}>
      <VStack px={3}>
        <Heading size={'xl'} marginBottom={'5'}>
          I tuoi messaggi
        </Heading>
        <VStack mb={3} w="100%" space={5} alignSelf="center">
          <Input
            onChangeText={onChangeSearch}
            placeholder="Cerca utenti o messaggi"
            width="100%"
            borderRadius="4"
            px="1"
            fontSize="18"
            InputLeftElement={
              <SearchIcon m="2" ml="3" size="6" color="gray.400" />
            }
          />
        </VStack>
      </VStack>
      <ConversationList stringQuery={searchQuery} />
    </ScreenWrapper>
  );
};

export default Messages;
