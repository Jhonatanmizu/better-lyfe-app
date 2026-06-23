import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {Box} from '@shared/components';
import AppRoutes from './app.routes';

const RootStack = () => {
  const [isLoading] = useState(false);

  if (isLoading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator size="large" color="#0000ff" />
      </Box>
    );
  }

  return <AppRoutes />;
};

export default RootStack;
