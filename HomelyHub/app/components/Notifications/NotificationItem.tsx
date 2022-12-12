import React, {useCallback} from 'react';
import {Notification} from '../../model/notification';
import moment from 'moment';
import {Avatar, Box, Card, HStack, Pressable, Text} from 'native-base';
import NavigationService from '../../navigation/NavigationService';

type NotificationItemProps = {
  notification: Notification;
};

const NotificationItem = ({notification}: NotificationItemProps) => {
  const onPress = useCallback(() => {
    if (notification.type?.value === '2') {
      NavigationService.navigate('');
    }
  }, [notification]);

  return (
    <Pressable onPress={() => onPress()}>
      <Box
        h={'20'}
        p={'4'}
        shadow={0}
        borderBottomWidth={0.3}
        bgColor={!notification.read ? 'primary.700' : 'white'}>
        <HStack space={3}>
          <Avatar
            size={'sm'}
            bgColor={'primary.700'}
            source={{uri: notification.user.avatar}}
          />

          <Text fontSize={'sm'} flex={1}>
            {notification.body}
          </Text>
          <Text w={16}>{moment(notification.date).fromNow()}</Text>
        </HStack>
      </Box>
    </Pressable>
  );
};

export default NotificationItem;
