import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { Sparkles } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { Box, Text } from '@shared/components';
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
    <Box style={styles.container}>
      {/* Skip Button */}
      <Box style={styles.skipContainer}>
        <Text variant="skip" onPress={handleSkipPress}>
          {t('onboarding.aiInsights.skip')}
        </Text>
      </Box>

      {/* Icon Section — concentric circles via nesting */}
      <Box style={styles.iconSection}>
        <View style={styles.circleOuter}>
          <View style={styles.circleMiddle}>
            <View style={styles.circleInner}>
              <Sparkles
                size={iconSize}
                color={iconColor}
                style={styles.icon}
              />
            </View>
          </View>
        </View>
      </Box>

      {/* Text Section */}
      <Box style={styles.textSection}>
        <Text variant="title" style={styles.title}>
          {t('onboarding.aiInsights.title')}
        </Text>
        <Text variant="description" style={styles.description}>
          {t('onboarding.aiInsights.description')}
        </Text>
      </Box>

      {/* Pagination Dots */}
      <Box style={styles.paginationContainer}>{renderDots()}</Box>

      {/* Get Started Button */}
      <Box style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={handleGetStartedPress}
          style={styles.button}
          labelStyle={styles.buttonLabel}
          contentStyle={styles.buttonContent}>
          {t('onboarding.aiInsights.getStarted')}
        </Button>
      </Box>
    </Box>
  );
};

export default AIInsights;
