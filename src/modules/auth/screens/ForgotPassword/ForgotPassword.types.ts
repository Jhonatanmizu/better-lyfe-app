import { UseFormReturn } from 'react-hook-form';
import { ForgotPasswordFormData } from '@/modules/auth/schemas';

export interface UseForgotPasswordReturn {
  form: UseFormReturn<ForgotPasswordFormData>;
  onSubmit: (data: ForgotPasswordFormData) => Promise<void>;
  isLoading: boolean;
  generalError: string | null;
  isSuccess: boolean;
  handleBackToSignIn: () => void;
}

export interface ForgotPasswordScreenProps {
  navigation?: {
    navigate: (screen: string) => void;
    goBack: () => void;
  };
}
