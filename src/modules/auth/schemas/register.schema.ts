import * as yup from 'yup';
import i18n from '@/infrastructure/i18n';

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const registerSchema = yup.object<RegisterFormData>().shape({
  name: yup
    .string()
    .required(i18n.t('validation.nameRequired'))
    .min(2, i18n.t('validation.nameMin')),
  email: yup
    .string()
    .required(i18n.t('validation.emailRequired'))
    .email(i18n.t('validation.emailInvalid')),
  password: yup
    .string()
    .required(i18n.t('validation.passwordRequired'))
    .min(6, i18n.t('validation.passwordMin')),
  confirmPassword: yup
    .string()
    .required(i18n.t('validation.confirmPasswordRequired'))
    .oneOf([yup.ref('password')], i18n.t('validation.passwordsMustMatch')),
});
