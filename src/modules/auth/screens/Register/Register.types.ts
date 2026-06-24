import { UseFormReturn } from 'react-hook-form';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { AuthRoutesParamsList } from '@/modules/auth/types/routes.types';
import { RegisterFormData } from '@/modules/auth/schemas';

export interface UseRegisterReturn {
  form: UseFormReturn<RegisterFormData>;
  onSubmit: (data: RegisterFormData) => Promise<void>;
  isLoading: boolean;
  generalError: string | null;
  handleBackToSignIn: () => void;
}

export type RegisterScreenProps = NativeStackScreenProps<AuthRoutesParamsList, 'Register'>;
