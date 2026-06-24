import { NavigatorScreenParams } from '@react-navigation/native';
import type { AuthRoutesParamsList } from '@modules/auth/types/routes.types';
import type { OnboardingRoutesParamsList } from '@modules/onboarding/types/routes.types';
import type { ExampleRoutesParamsList } from '@modules/example/types/routes.types';

export type RootParamList = {
  authRoutes: NavigatorScreenParams<AuthRoutesParamsList>;
  onboardingRoutes: NavigatorScreenParams<OnboardingRoutesParamsList>;
  exampleRoutes: NavigatorScreenParams<ExampleRoutesParamsList>;
};
