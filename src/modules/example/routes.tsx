import React from 'react';
import type { RoutesList } from '@shared/types';
import type { ExampleRoutesParamsList } from '@modules/example/types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ExampleScreen from '@modules/example/screens/ExampleScreen';
import { EXAMPLE_SCREENS } from '@modules/example/constants';

export type ExampleRoutesStack =
  NativeStackNavigationProp<ExampleRoutesParamsList>;

export const exampleRoutesList: RoutesList<ExampleRoutesParamsList>[] = [
  {
    name: EXAMPLE_SCREENS.EXAMPLE_SCREEN,
    component: ExampleScreen,
  },
];

const ExampleStack = createNativeStackNavigator<ExampleRoutesParamsList>();

const ExampleRoutes = () => {
  return (
    <ExampleStack.Navigator initialRouteName={EXAMPLE_SCREENS.EXAMPLE_SCREEN}>
      {exampleRoutesList.map(ap => (
        <ExampleStack.Screen
          key={ap.name}
          name={ap.name}
          component={ap.component}
          options={{
            headerShown: false,
          }}
        />
      ))}
    </ExampleStack.Navigator>
  );
};

export default ExampleRoutes;
