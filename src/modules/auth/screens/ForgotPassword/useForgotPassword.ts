import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { forgotPasswordSchema, ForgotPasswordFormData } from '@/modules/auth/schemas';
import { useAuthStore } from '@/modules/auth/store';
import { AUTH_SCREENS } from '@/modules/auth/constants';
import { UseForgotPasswordReturn } from './ForgotPassword.types';

const useForgotPassword = (): UseForgotPasswordReturn => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { forgotPassword, isLoading, clearError } = useAuthStore();

  const form = useForm<ForgotPasswordFormData>({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = useCallback(
    async (data: ForgotPasswordFormData): Promise<void> => {
      setGeneralError(null);
      clearError();

      try {
        await forgotPassword(data.email);
        setIsSuccess(true);
      } catch (error: unknown) {
        let errorMessage = t('screens.ForgotPassword.errors.sendFailed');
        if (error instanceof Error) {
          const axiosError = error as { response?: { status?: number } };
          if (axiosError.response?.status === 404) {
            errorMessage = t('screens.ForgotPassword.errors.sendFailed');
          } else {
            errorMessage = t('screens.ForgotPassword.errors.networkError');
          }
        }
        setGeneralError(errorMessage);
      }
    },
    [forgotPassword, clearError, t],
  );

  const handleBackToSignIn = useCallback(() => {
    navigation.navigate(AUTH_SCREENS.LOGIN as never);
  }, [navigation]);

  return {
    form,
    onSubmit,
    isLoading,
    generalError,
    isSuccess,
    handleBackToSignIn,
  };
};

export default useForgotPassword;
