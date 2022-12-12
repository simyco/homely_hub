import {SectionList} from 'react-native';
import React, {useEffect, useState} from 'react';

import NotificationItem from './NotificationItem';
import EmptyContent from '../Layout/EmptyContent';
import {useGetNotifications} from '../../services/hooks/notifications/useGetNotifications';
import {Box, Heading} from 'native-base';

const NotificationsList = () => {
  const {data: notifications, isLoading, isSuccess} = useGetNotifications();
  const [section, setSection] = useState<any>([]);
  useEffect(() => {
    if (isSuccess) {
      const notificationsToRead = notifications?.filter(c => !c.read) ?? [];
      const allNotifications = notifications?.filter(c => c.read) ?? [];
      const sections = [];
      if (notificationsToRead.length > 0) {
        sections.push({title: 'Non lette', data: notificationsToRead});
      }
      sections.push({title: 'Notifiche lette', data: allNotifications});
      setSection(sections);
    }
  }, [isSuccess]);

  return (
    <Box flex={1}>
      {isLoading ? (
        <EmptyContent
          text="Non sono presenti nuove notifiche oggi!"
          image={require('../../assets/illustrations/no_notifications.png')}
        />
      ) : (
        <SectionList
          sections={section}
          ListEmptyComponent={() => (
            <EmptyContent
              text="Non sono presenti nuovi messaggi!"
              image={require('../../assets/illustrations/emptyconversations.png')}
            />
          )}
          keyExtractor={(item, index) => item.id.toString() + index}
          renderItem={({item}) => <NotificationItem notification={item} />}
          renderSectionHeader={({section: {title}}) => (
            <Box bgColor="white">
              <Heading size={'lg'} m={5}>
                {title}
              </Heading>
            </Box>
          )}
        />
      )}
    </Box>
  );
};

export default NotificationsList;
