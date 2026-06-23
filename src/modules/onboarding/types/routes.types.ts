import { ONBOARDING_SCREENS } from '@modules/onboarding/constants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type OnboardingRoutesParamsList = {
  [ONBOARDING_SCREENS.TRACK_GOALS]: undefined;
  [ONBOARDING_SCREENS.HABITS]: undefined;
  [ONBOARDING_SCREENS.AI_INSIGHTS]: undefined;
};

export type OnboardingRoutesStack =
  NativeStackNavigationProp<OnboardingRoutesParamsList>;
