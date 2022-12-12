import {Center, Image, VStack} from 'native-base';
import React, {useState} from 'react';
import {ScreenWrapper} from '../../components/Layout';
import NavigationService from '../../navigation/NavigationService';
import PrivacyPolicy from './PrivacyPolicy';
import RegisterForm from './RegisterForm';

const Register = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [acceptPrivacyPolicy, setAcceptPrivacyPolicy] = useState(false);
  const onSubmit = () => {
    NavigationService.navigate('Onboarding');
  };

  const goBack = () => NavigationService.goBack();
  return (
    <ScreenWrapper>
      <VStack p={5} mb={5}>
        <Center>
          <Image
            alt={'logo'}
            size="xl"
            source={require('../../assets/images/logo_collegami.png')}
          />
        </Center>

        {showPrivacyPolicy ? (
          <PrivacyPolicy
            onAccept={() => {
              setAcceptPrivacyPolicy(true);
              setShowPrivacyPolicy(!showPrivacyPolicy);
            }}
            onBack={() => setShowPrivacyPolicy(!showPrivacyPolicy)}
          />
        ) : (
          <RegisterForm
            submitFn={onSubmit}
            backButtonFn={goBack}
            acceptPrivacyPolicy={acceptPrivacyPolicy}
            privacyPolicyPressFn={() =>
              setShowPrivacyPolicy(!showPrivacyPolicy)
            }
          />
        )}
      </VStack>
    </ScreenWrapper>
  );
};
export default Register;
