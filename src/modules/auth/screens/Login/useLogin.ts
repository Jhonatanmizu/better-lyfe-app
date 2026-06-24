import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { loginSchema, LoginFormData } from '@/modules/auth/schemas';
import { useAuthStore } from '@/modules/auth/store';
import { UseLoginReturn } from './Login.types';

const useLogin = (): UseLoginReturn => {
  const { t } = useTranslation();
  const [generalError, setGeneralError] = useState<string | null>(null);
  const { login, isLoading, clearError } = useAuthStore();

  const form = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = useCallback(
    async (data: LoginFormData): Promise<void> => {
      setGeneralError(null);
      clearError();

      try {
        await login(data.email, data.password);
      } catch (error: unknown) {
        let errorMessage = t('screens.Login.errors.loginFailed');
        if (error instanceof Error) {
          const axiosError = error as { response?: { status?: number } };
          if (axiosError.response?.status === 401) {
            errorMessage = t('screens.Login.errors.loginFailed');
          } else {
            errorMessage = t('screens.Login.errors.networkError');
          }
        }
        setGeneralError(errorMessage);
      }
    },
    [login, clearError, t],
  );

  return {
    form,
    onSubmit,
    isLoading,
    generalError,
  };
};

export default useLogin;
