import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import type { RoutesList } from '@shared/types';

import ExampleRoutes from '@modules/example/routes';
import OnboardingRoutes from '@modules/onboarding/routes';
import { APP_ROUTES } from '@modules/routes/constants';

export type IAppStackParamsList = {
  [APP_ROUTES.EXAMPLE_ROUTES]: undefined;
  [APP_ROUTES.ONBOARDING_ROUTES]: undefined;
  [APP_ROUTES.TAB_ROUTES]: undefined;
  [APP_ROUTES.DRAWER_ROUTES]: undefined;
};

export type IAppStack = NativeStackNavigationProp<IAppStackParamsList>;

export const appRoutesList: RoutesList<IAppStackParamsList>[] = [
  {
    name: APP_ROUTES.ONBOARDING_ROUTES,
    component: OnboardingRoutes,
  },
  {
    name: APP_ROUTES.EXAMPLE_ROUTES,
    component: ExampleRoutes,
  },
];

const AppStack = createNativeStackNavigator<IAppStackParamsList>();

const AppRoutes = () => {
  return (
    <AppStack.Navigator
      initialRouteName={APP_ROUTES.ONBOARDING_ROUTES}
      screenOptions={() => ({
        headerShown: false,
      })}>
      {appRoutesList.map(ap => (
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
