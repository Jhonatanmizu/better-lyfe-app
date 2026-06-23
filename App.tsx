import '@/infrastructure/i18n';
import { NavigationContainer } from '@react-navigation/native';
import { AppWrapper } from '@shared/components';
import React, { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import RootStack from '@modules/routes';

export default function App() {
  useEffect(() => {
    BootSplash.hide({ fade: true });
  }, []);

  return (
    <NavigationContainer>
      <AppWrapper>
        <RootStack />
      </AppWrapper>
    </NavigationContainer>
  );
}
