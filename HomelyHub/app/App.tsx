import React from 'react';

import {RNQueryClient} from './services/react-query/query-client';
import Navigator from './navigation/NavigationStack';
import {QueryClientProvider} from '@tanstack/react-query';
import {NativeBaseProvider} from 'native-base';
import {theme} from './config/theme';
import {AuthProvider} from './services/hooks/account/useAuth';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <QueryClientProvider client={RNQueryClient}>
        <AuthProvider>
          <Navigator />
        </AuthProvider>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
};

export default App;
