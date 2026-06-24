import * as yup from 'yup';
import i18n from '@/infrastructure/i18n';

export interface ForgotPasswordFormData {
  email: string;
}

export const forgotPasswordSchema = yup.object<ForgotPasswordFormData>().shape({
  email: yup
    .string()
    .required(i18n.t('validation.emailRequired'))
    .email(i18n.t('validation.emailInvalid')),
});
