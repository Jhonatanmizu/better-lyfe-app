import { UseFormReturn } from 'react-hook-form';
import { LoginFormData } from '@/modules/auth/schemas';

export interface UseLoginReturn {
  form: UseFormReturn<LoginFormData>;
  onSubmit: (data: LoginFormData) => Promise<void>;
  isLoading: boolean;
  generalError: string | null;
}

export interface LoginScreenProps {
  navigation?: {
    navigate: (screen: string) => void;
  };
}
