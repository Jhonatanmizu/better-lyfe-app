import { UseFormReturn } from 'react-hook-form';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { AuthRoutesParamsList } from '@/modules/auth/types/routes.types';
import { ForgotPasswordFormData } from '@/modules/auth/schemas';

export interface UseForgotPasswordReturn {
  form: UseFormReturn<ForgotPasswordFormData>;
  onSubmit: (data: ForgotPasswordFormData) => Promise<void>;
  isLoading: boolean;
  generalError: string | null;
  isSuccess: boolean;
  handleBackToSignIn: () => void;
}

export type ForgotPasswordScreenProps = NativeStackScreenProps<AuthRoutesParamsList, 'ForgotPassword'>;
