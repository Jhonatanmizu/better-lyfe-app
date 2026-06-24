import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Flame } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { Box, Text, Button } from '@shared/components';
import {
  CIRCLE_OUTER_SIZE,
  CIRCLE_MIDDLE_SIZE,
  CIRCLE_INNER_SIZE,
  ICON_SIZE,
} from '@/modules/onboarding/constants/responsive';
import useHabits from './useHabits';
import useStyles from './useStyles';

const Habits = (): React.JSX.Element => {
  const styles = useStyles();
  const { t } = useTranslation();
  const {
    handleNextPress,
    handleSkipPress,
    activeIndex,
    totalSteps,
    iconSize,
    iconColor,
  } = useHabits();

  const renderDots = () => {
    return Array.from({ length: totalSteps }, (_, index) => (
      <View
        key={`dot-${index}`}
        style={[
          styles.dot,
          index === activeIndex ? styles.dotActive : styles.dotInactive,
        ]}
      />
    ));
  };

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <TouchableOpacity style={styles.skipContainer} onPress={handleSkipPress}>
        <Text variant="skip">{t('onboarding.habits.skip')}</Text>
      </TouchableOpacity>

      <Box flex={1} justifyContent="center" alignItems="center" padding="xxl">
        <Box
          width={CIRCLE_OUTER_SIZE}
          height={CIRCLE_OUTER_SIZE}
          style={{ borderRadius: CIRCLE_OUTER_SIZE / 2 }}
          backgroundColor="amberLighter"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width={CIRCLE_MIDDLE_SIZE}
            height={CIRCLE_MIDDLE_SIZE}
            style={{ borderRadius: CIRCLE_MIDDLE_SIZE / 2 }}
            backgroundColor="amberLight"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              width={CIRCLE_INNER_SIZE}
              height={CIRCLE_INNER_SIZE}
              style={{ borderRadius: CIRCLE_INNER_SIZE / 2 }}
              backgroundColor="primary"
              justifyContent="center"
              alignItems="center"
            >
              <Flame size={iconSize} color={iconColor} style={{ width: ICON_SIZE, height: ICON_SIZE }} />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box alignItems="center" paddingHorizontal="xxl" gap="m">
        <Text variant="title" textAlign="center">
          {t('onboarding.habits.title')}
        </Text>
        <Text variant="description" textAlign="center">
          {t('onboarding.habits.description')}
        </Text>
      </Box>

      <Box height={44} flexDirection="row" justifyContent="center" alignItems="center" gap="s">
        {renderDots()}
      </Box>

      <Box paddingHorizontal="l" paddingBottom="xl">
        <Button
          label={t('onboarding.habits.next')}
          onPress={handleNextPress}
          size="lg"
        />
      </Box>
    </Box>
  );
};

export default Habits;
