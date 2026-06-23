import { NavigationContainer } from '@react-navigation/native';
import { AppWrapper } from '@shared/components';
import React from 'react';
import RootStack from '@/modules/routes';

export default function App() {
  return (
    <NavigationContainer>
      <AppWrapper>
        <RootStack />
      </AppWrapper>
    </NavigationContainer>
  );
}
