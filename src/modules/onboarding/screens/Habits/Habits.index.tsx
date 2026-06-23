import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
import { Flame } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { Box, Text } from '@shared/components';
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
    <Box style={styles.container}>
      <TouchableOpacity style={styles.skipContainer} onPress={handleSkipPress}>
        <Text variant="skip">{t('onboarding.habits.skip')}</Text>
      </TouchableOpacity>

      <Box style={styles.iconSection}>
        <View style={styles.circleOuter}>
          <View style={styles.circleMiddle}>
            <View style={styles.circleInner}>
              <Flame size={iconSize} color={iconColor} style={styles.icon} />
            </View>
          </View>
        </View>
      </Box>

      <Box style={styles.textSection}>
        <Text variant="title" style={styles.title}>
          {t('onboarding.habits.title')}
        </Text>
        <Text variant="description" style={styles.description}>
          {t('onboarding.habits.description')}
        </Text>
      </Box>

      <Box style={styles.paginationContainer}>{renderDots()}</Box>

      <Box style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={handleNextPress}
          style={styles.button}
          labelStyle={styles.buttonLabel}
          contentStyle={styles.buttonContent}
        >
          {t('onboarding.habits.next')}
        </Button>
      </Box>
    </Box>
  );
};

export default Habits;
