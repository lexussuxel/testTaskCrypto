import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { resources } from './resources';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('locale') || 'en',
        fallbackLng: 'en',
        debug: true,
       // ns: 'translation',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n
