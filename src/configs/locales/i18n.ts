import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import enLocale from '#/configs/locales/en.json';
import frLocale from '#/configs/locales/vi.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    lng: localStorage.getItem('locale') || 'en',
    resources: {
      en: {
        translation: enLocale,
      },
      fr: {
        translation: frLocale,
      },
    },
  });

export default i18n;
