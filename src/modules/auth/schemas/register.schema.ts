import * as yup from 'yup';
import i18n from '@/infrastructure/i18n';

export interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const registerSchema = yup.object<RegisterFormData>().shape({
  firstName: yup
    .string()
    .required(i18n.t('validation.firstNameRequired'))
    .min(2, i18n.t('validation.firstNameMin')),
  lastName: yup
    .string()
    .required(i18n.t('validation.lastNameRequired'))
    .min(2, i18n.t('validation.lastNameMin')),
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
