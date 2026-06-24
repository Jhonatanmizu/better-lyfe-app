import { UseFormReturn } from 'react-hook-form';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { AuthRoutesParamsList } from '@/modules/auth/types/routes.types';
import { LoginFormData } from '@/modules/auth/schemas';

export interface UseLoginReturn {
  form: UseFormReturn<LoginFormData>;
  onSubmit: (data: LoginFormData) => Promise<void>;
  isLoading: boolean;
  generalError: string | null;
  handleForgotPassword: () => void;
  handleSignUp: () => void;
}

export type LoginScreenProps = NativeStackScreenProps<AuthRoutesParamsList, 'Login'>;
