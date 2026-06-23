import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import en from './locales/en.json';
import ptBR from './locales/pt-BR.json';

const resources = {
  en: {translation: en},
  'pt-BR': {translation: ptBR},
};

const getDeviceLanguage = (): string => {
  const locales = RNLocalize.getLocales();
  const locale = locales[0]?.languageTag;

  if (locale === 'pt-BR' || locale?.startsWith('pt')) {
    return 'pt-BR';
  }

  return 'en';
};

i18n.use(initReactI18next).init({
  resources,
  lng: getDeviceLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v4',
});

export default i18n;
export const changeLanguage = (lng: 'en' | 'pt-BR') => {
  return i18n.changeLanguage(lng);
};
