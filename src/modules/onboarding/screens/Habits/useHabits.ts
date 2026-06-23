import { useCallback, useState } from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { palette } from '@infrastructure/theme';
import { OnboardingRoutesStack } from '@modules/onboarding/types/routes.types';
import { ONBOARDING_SCREENS, ONBOARDING_SEEN_KEY } from '@modules/onboarding/constants';
import { UseHabitsReturn } from './Habits.types';
import { useMMKVStorage } from '@/modules/shared/hooks';
import { EXAMPLE_ROUTES } from '@/modules/example/constants';

const TOTAL_STEPS = 3;
const HABITS_ACTIVE_INDEX = 1;
const ICON_SIZE = 40;

const useHabits = (): UseHabitsReturn => {
  const { setValue } = useMMKVStorage(ONBOARDING_SEEN_KEY, false);
  const navigation = useNavigation<OnboardingRoutesStack>();
  const [activeIndex] = useState<number>(HABITS_ACTIVE_INDEX);

  const handleNextPress = useCallback(() => {
    navigation.navigate(ONBOARDING_SCREENS.AI_INSIGHTS);
  }, [navigation]);

  const handleSkipPress = useCallback(() => {
    setValue(true);
    navigation.dispatch(CommonActions.navigate(EXAMPLE_ROUTES.EXAMPLE));
  }, [navigation, setValue]);

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
