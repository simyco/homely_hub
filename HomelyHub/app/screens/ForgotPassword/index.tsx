import {Box, Button} from 'native-base';
import React from 'react';
import NavigationService from '../../navigation/NavigationService';

const ForgotPassword: React.FC = () => {
  const goBack = () => NavigationService.goBack();
  return (
    <Box>
      <Button onPress={goBack}>Go Back</Button>
    </Box>
  );
};

export default ForgotPassword;
