import * as yup from 'yup';
import i18n from '@/infrastructure/i18n';

export interface LoginFormData {
  email: string;
  password: string;
}

export const loginSchema = yup.object<LoginFormData>().shape({
  email: yup
    .string()
    .required(i18n.t('validation.emailRequired'))
    .email(i18n.t('validation.emailInvalid')),
  password: yup
    .string()
    .required(i18n.t('validation.passwordRequired'))
    .min(6, i18n.t('validation.passwordMin')),
});
