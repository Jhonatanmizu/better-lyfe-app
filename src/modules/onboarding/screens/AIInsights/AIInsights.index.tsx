import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Sparkles } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { Box, Text, Button } from '@shared/components';
import {
  CIRCLE_OUTER_SIZE,
  CIRCLE_MIDDLE_SIZE,
  CIRCLE_INNER_SIZE,
  ICON_SIZE,
} from '@/modules/onboarding/constants/responsive';
import useAIInsights from './useAIInsights';
import useStyles from './useStyles';

const AIInsights = (): React.JSX.Element => {
  const styles = useStyles();
  const { t } = useTranslation();
  const {
    handleGetStartedPress,
    handleSkipPress,
    activeIndex,
    totalSteps,
    iconSize,
    iconColor,
  } = useAIInsights();

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
        <Text variant="skip">{t('onboarding.aiInsights.skip')}</Text>
      </TouchableOpacity>

      <Box flex={1} justifyContent="center" alignItems="center" padding="xxl">
        <Box
          width={CIRCLE_OUTER_SIZE}
          height={CIRCLE_OUTER_SIZE}
          style={{ borderRadius: CIRCLE_OUTER_SIZE / 2 }}
          backgroundColor="violetLighter"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width={CIRCLE_MIDDLE_SIZE}
            height={CIRCLE_MIDDLE_SIZE}
            style={{ borderRadius: CIRCLE_MIDDLE_SIZE / 2 }}
            backgroundColor="violetLight"
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
              <Sparkles size={iconSize} color={iconColor} style={{ width: ICON_SIZE, height: ICON_SIZE }} />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box alignItems="center" paddingHorizontal="xxl" gap="m">
        <Text variant="title" textAlign="center">
          {t('onboarding.aiInsights.title')}
        </Text>
        <Text variant="description" textAlign="center">
          {t('onboarding.aiInsights.description')}
        </Text>
      </Box>

      <Box height={44} flexDirection="row" justifyContent="center" alignItems="center" gap="s">
        {renderDots()}
      </Box>

      <Box paddingHorizontal="l" paddingBottom="xl">
        <Button
          label={t('onboarding.aiInsights.getStarted')}
          onPress={handleGetStartedPress}
          size="lg"
        />
      </Box>
    </Box>
  );
};

export default AIInsights;
