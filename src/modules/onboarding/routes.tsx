import React from 'react';
import type { RoutesList } from '@shared/types';
import type { OnboardingRoutesParamsList } from '@modules/onboarding/types/routes.types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {TrackGoals, Habits, AIInsights} from "@modules/onboarding/screens/index";
import { ONBOARDING_SCREENS } from '@modules/onboarding/constants';

export type { OnboardingRoutesStack } from '@modules/onboarding/types/routes.types';

export const onboardingRoutesList: RoutesList<OnboardingRoutesParamsList>[] = [
  {
    name: ONBOARDING_SCREENS.TRACK_GOALS,
    component: TrackGoals,
  },
  {
    name: ONBOARDING_SCREENS.HABITS,
    component: Habits,
  },
  {
    name: ONBOARDING_SCREENS.AI_INSIGHTS,
    component: AIInsights,
  },
];

const OnboardingStack =
  createNativeStackNavigator<OnboardingRoutesParamsList>();

const OnboardingRoutes = () => {
  return (
    <OnboardingStack.Navigator initialRouteName={ONBOARDING_SCREENS.TRACK_GOALS}>
      {onboardingRoutesList.map(route => (
        <OnboardingStack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            headerShown: false,
          }}
        />
      ))}
    </OnboardingStack.Navigator>
  );
};

export default OnboardingRoutes;
