import { ONBOARDING_SCREENS } from '@modules/onboarding/constants';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootParamList } from '@shared/types';

export type OnboardingRoutesParamsList = {
  [ONBOARDING_SCREENS.TRACK_GOALS]: undefined;
  [ONBOARDING_SCREENS.HABITS]: undefined;
  [ONBOARDING_SCREENS.AI_INSIGHTS]: undefined;
};

export type OnboardingRoutesStack =
  NativeStackNavigationProp<OnboardingRoutesParamsList>;

export type OnboardingNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<OnboardingRoutesParamsList>,
  NativeStackNavigationProp<RootParamList>
>;
