import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { Box } from '@shared/components';
import AppRoutes from '@modules/routes/app.routes';
import { useAuthStore } from '@/modules/auth/store';

const RootStack = () => {
  const { initialize, isInitialized } = useAuthStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  if (!isInitialized) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator size="large" color="#66CCAA" />
      </Box>
    );
  }

  return <AppRoutes />;
};

export default RootStack;
