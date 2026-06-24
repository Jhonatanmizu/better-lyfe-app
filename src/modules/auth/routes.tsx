import React from 'react';
import type { RoutesList } from '@shared/types';
import type { AuthRoutesParamsList } from '@modules/auth/types/routes.types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login, ForgotPassword } from '@modules/auth/screens';
import { AUTH_SCREENS } from '@modules/auth/constants';

export type { AuthRoutesStack } from '@modules/auth/types/routes.types';

export const authRoutesList: RoutesList<AuthRoutesParamsList>[] = [
  {
    name: AUTH_SCREENS.LOGIN,
    component: Login,
  },
  {
    name: AUTH_SCREENS.FORGOT_PASSWORD,
    component: ForgotPassword,
  },
];

const AuthStack = createNativeStackNavigator<AuthRoutesParamsList>();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator initialRouteName={AUTH_SCREENS.LOGIN}>
      {authRoutesList.map(route => (
        <AuthStack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            headerShown: false,
          }}
        />
      ))}
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
