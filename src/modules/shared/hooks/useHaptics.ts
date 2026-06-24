import { useCallback } from 'react';
import ReactNativeHapticFeedback, {
  HapticFeedbackTypes,
} from 'react-native-haptic-feedback';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

export const useHaptics = () => {
  const triggerLight = useCallback(() => {
    ReactNativeHapticFeedback.trigger(
      HapticFeedbackTypes.impactLight,
      options,
    );
  }, []);

  const triggerMedium = useCallback(() => {
    ReactNativeHapticFeedback.trigger(
      HapticFeedbackTypes.impactMedium,
      options,
    );
  }, []);

  const triggerHeavy = useCallback(() => {
    ReactNativeHapticFeedback.trigger(
      HapticFeedbackTypes.impactHeavy,
      options,
    );
  }, []);

  const triggerSuccess = useCallback(() => {
    ReactNativeHapticFeedback.trigger(
      HapticFeedbackTypes.notificationSuccess,
      options,
    );
  }, []);

  const triggerWarning = useCallback(() => {
    ReactNativeHapticFeedback.trigger(
      HapticFeedbackTypes.notificationWarning,
      options,
    );
  }, []);

  const triggerError = useCallback(() => {
    ReactNativeHapticFeedback.trigger(
      HapticFeedbackTypes.notificationError,
      options,
    );
  }, []);

  const triggerSelection = useCallback(() => {
    ReactNativeHapticFeedback.trigger(
      HapticFeedbackTypes.selection,
      options,
    );
  }, []);

  return {
    triggerLight,
    triggerMedium,
    triggerHeavy,
    triggerSuccess,
    triggerWarning,
    triggerError,
    triggerSelection,
  };
};
