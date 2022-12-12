import {StyleSheet} from 'react-native';
import React from 'react';
import NotificationsList from '../../components/Notifications/NotificationsList';
import {ScreenWrapper} from '../../components/Layout';

const Notification = () => {
  return (
    <ScreenWrapper style={styles.screen} withScrollView={false}>
      <NotificationsList />
    </ScreenWrapper>
  );
};

export default Notification;
const styles = StyleSheet.create({
  screen: {
    paddingBottom: 0,
    backgroundColor: 'white',
    marginHorizontal: 0,
  },
});
