import { useCallback } from 'react';
import Toast from 'react-native-toast-message';
import { useHaptics } from './useHaptics';

type ToastType = 'success' | 'error' | 'info';

interface ShowToastParams {
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

export const useToast = () => {
  const { triggerSuccess, triggerError } = useHaptics();

  const show = useCallback(
    ({ type, title, message, duration = 3000 }: ShowToastParams) => {
      if (type === 'success') {
        triggerSuccess();
      } else if (type === 'error') {
        triggerError();
      }

      Toast.show({
        type,
        text1: title,
        text2: message,
        visibilityTime: duration,
        topOffset: 60,
      });
    },
    [triggerSuccess, triggerError],
  );

  const showSuccess = useCallback(
    (title: string, message?: string) => {
      show({ type: 'success', title, message });
    },
    [show],
  );

  const showError = useCallback(
    (title: string, message?: string) => {
      show({ type: 'error', title, message });
    },
    [show],
  );

  const showInfo = useCallback(
    (title: string, message?: string) => {
      show({ type: 'info', title, message });
    },
    [show],
  );

  const hide = useCallback(() => {
    Toast.hide();
  }, []);

  return { show, showSuccess, showError, showInfo, hide };
};
