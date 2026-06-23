import { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { palette } from '@infrastructure/theme';
import { OnboardingRoutesStack } from '@modules/onboarding/types/routes.types';
import { APP_ROUTES } from '@modules/routes/constants';
import { ONBOARDING_SCREENS } from '@modules/onboarding/constants';
import { UseAIInsightsReturn } from './AIInsights.types';

const TOTAL_STEPS = 3;
const AI_INSIGHTS_ACTIVE_INDEX = 2;
const ICON_SIZE = 40;

const useAIInsights = (): UseAIInsightsReturn => {
  const navigation = useNavigation<OnboardingRoutesStack>();
  const [activeIndex] = useState<number>(AI_INSIGHTS_ACTIVE_INDEX);

  const handleGetStartedPress = useCallback(() => {
    navigation.getParent()?.navigate(APP_ROUTES.EXAMPLE_ROUTES);
  }, [navigation]);

  const handleSkipPress = useCallback(() => {
    navigation.getParent()?.navigate(APP_ROUTES.EXAMPLE_ROUTES);
  }, [navigation]);

  return {
    handleGetStartedPress,
    handleSkipPress,
    activeIndex,
    totalSteps: TOTAL_STEPS,
    iconSize: ICON_SIZE,
    iconColor: palette.white,
  };
};

export default useAIInsights;
