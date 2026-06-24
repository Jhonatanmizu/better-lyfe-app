import React, { useMemo } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import type { RoutesList } from '@shared/types';

import AuthRoutes from '@modules/auth/routes';
import ExampleRoutes from '@modules/example/routes';
import OnboardingRoutes from '@modules/onboarding/routes';
import { APP_ROUTES } from '@modules/routes/constants';
import { AUTH_ROUTES } from '@modules/auth/constants';
import { ONBOARDING_SEEN_KEY } from '@modules/onboarding/constants';
import { useMMKVStorage } from '@/modules/shared/hooks';
import { useAuthStore } from '@/modules/auth/store';

export type IAppStackParamsList = {
  [APP_ROUTES.EXAMPLE_ROUTES]: undefined;
  [APP_ROUTES.ONBOARDING_ROUTES]: undefined;
  [APP_ROUTES.TAB_ROUTES]: undefined;
  [APP_ROUTES.DRAWER_ROUTES]: undefined;
  [AUTH_ROUTES.AUTH]: undefined;
};

export type IAppStack = NativeStackNavigationProp<IAppStackParamsList>;

const AppStack = createNativeStackNavigator<IAppStackParamsList>();

const AppRoutes = () => {
  const { value } = useMMKVStorage(ONBOARDING_SEEN_KEY, false);
  const isOnboardingSeen = !!value;
  const { isAuthenticated, isInitialized } = useAuthStore();

  const routes = useMemo(() => {
    const allRoutes: RoutesList<IAppStackParamsList>[] = [
      {
        name: AUTH_ROUTES.AUTH,
        component: AuthRoutes,
      },
      {
        name: APP_ROUTES.ONBOARDING_ROUTES,
        component: OnboardingRoutes,
      },
      {
        name: APP_ROUTES.EXAMPLE_ROUTES,
        component: ExampleRoutes,
      },
    ];

    if (isAuthenticated) {
      return allRoutes.filter(
        r =>
          r.name !== AUTH_ROUTES.AUTH &&
          r.name !== APP_ROUTES.ONBOARDING_ROUTES,
      );
    }

    if (isOnboardingSeen) {
      return allRoutes.filter(
        r => r.name !== APP_ROUTES.ONBOARDING_ROUTES,
      );
    }

    return allRoutes.filter(r => r.name !== AUTH_ROUTES.AUTH);
  }, [isAuthenticated, isOnboardingSeen]);

  const getInitialRoute = (): keyof IAppStackParamsList => {
    if (isAuthenticated) {
      return APP_ROUTES.EXAMPLE_ROUTES;
    }
    if (isOnboardingSeen) {
      return AUTH_ROUTES.AUTH;
    }
    return APP_ROUTES.ONBOARDING_ROUTES;
  };

  if (!isInitialized) {
    return null;
  }

  return (
    <AppStack.Navigator
      initialRouteName={getInitialRoute()}
      screenOptions={() => ({
        headerShown: false,
      })}>
      {routes.map(ap => (
        <AppStack.Screen
          key={ap.name}
          name={ap.name}
          component={ap.component}
        />
      ))}
    </AppStack.Navigator>
  );
};

export default AppRoutes;
