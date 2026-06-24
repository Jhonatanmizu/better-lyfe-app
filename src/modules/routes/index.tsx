import React, { useEffect } from 'react';
import { Spinner } from '@shared/components';
import AppRoutes from '@modules/routes/app.routes';
import { useAuthStore } from '@/modules/auth/store';

const RootStack = () => {
  const { initialize, isInitialized } = useAuthStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  if (!isInitialized) {
    return <Spinner />;
  }

  return <AppRoutes />;
};

export default RootStack;
