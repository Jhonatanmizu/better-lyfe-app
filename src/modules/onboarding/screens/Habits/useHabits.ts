import { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { palette } from '@infrastructure/theme';
import { OnboardingRoutesStack } from '@modules/onboarding/types/routes.types';
import { APP_ROUTES } from '@modules/routes/constants';
import { ONBOARDING_SCREENS } from '@modules/onboarding/constants';
import { UseHabitsReturn } from './Habits.types';

const TOTAL_STEPS = 3;
const HABITS_ACTIVE_INDEX = 1;
const ICON_SIZE = 40;

const useHabits = (): UseHabitsReturn => {
  const navigation = useNavigation<OnboardingRoutesStack>();
  const [activeIndex] = useState<number>(HABITS_ACTIVE_INDEX);

  const handleNextPress = useCallback(() => {
    navigation.navigate(ONBOARDING_SCREENS.AI_INSIGHTS);
  }, [navigation]);

  const handleSkipPress = useCallback(() => {
    navigation.getParent()?.navigate(APP_ROUTES.EXAMPLE_ROUTES);
  }, [navigation]);

  return {
    handleNextPress,
    handleSkipPress,
    activeIndex,
    totalSteps: TOTAL_STEPS,
    iconSize: ICON_SIZE,
    iconColor: palette.white,
  };
};

export default useHabits;
