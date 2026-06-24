import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { registerSchema, RegisterFormData } from '@/modules/auth/schemas';
import { useAuthStore } from '@/modules/auth/store';
import { AUTH_SCREENS } from '@/modules/auth/constants';
import type { AuthRoutesStack } from '@/modules/auth/types/routes.types';
import { UseRegisterReturn } from './Register.types';

const useRegister = (): UseRegisterReturn => {
  const { t } = useTranslation();
  const navigation = useNavigation<AuthRoutesStack>();
  const [generalError, setGeneralError] = useState<string | null>(null);
  const { register, isLoading, clearError } = useAuthStore();

  const form = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = useCallback(
    async (data: RegisterFormData): Promise<void> => {
      setGeneralError(null);
      clearError();

      try {
        await register(data.firstName, data.lastName, data.email, data.password);
      } catch (error: unknown) {
        let errorMessage = t('screens.Register.errors.registerFailed');
        if (error instanceof Error) {
          const axiosError = error as { response?: { status?: number } };
          if (axiosError.response?.status === 409) {
            errorMessage = t('screens.Register.errors.registerFailed');
          } else {
            errorMessage = t('screens.Register.errors.networkError');
          }
        }
        setGeneralError(errorMessage);
      }
    },
    [register, clearError, t],
  );

  const handleBackToSignIn = useCallback(() => {
    navigation.navigate(AUTH_SCREENS.LOGIN);
  }, [navigation]);

  return {
    form,
    onSubmit,
    isLoading,
    generalError,
    handleBackToSignIn,
  };
};

export default useRegister;
