import {Box, Icon} from 'native-base';
import React from 'react';
import {Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const renderSend = props => {
  return (
    <Send {...props}>
      <Box
        mr={3}
        mt={2}
        h={'10'}
        w={'10'}
        justifyContent="center"
        alignContent={'center'}
        alignItems={'center'}
        bgColor={'primary.400'}
        borderRadius={'full'}>
        <Icon
          size={'md'}
          as={MaterialCommunityIcons}
          name={'send'}
          color="white"
        />
      </Box>
    </Send>
  );
};
