import {Box} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {ScreenWrapper} from '../../components/Layout';
import NavigationService from '../../navigation/NavigationService';
import PrivacyPolicy from '../Register/PrivacyPolicy';

const Privacy = () => {
  const goBack = () => NavigationService.goBack();
  return (
    <ScreenWrapper style={styles.container}>
      <Box px={5}>
        <PrivacyPolicy onBack={() => goBack()} />
      </Box>
    </ScreenWrapper>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

export default Privacy;
