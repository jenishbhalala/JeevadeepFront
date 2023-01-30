import i18n from "i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next  } from "react-i18next";

import translationEN from './assets/translate/en/translation.json';
import translationHI from './assets/translate/hi/translation.json';
import translationGUJ from './assets/translate/guj/translation.json';

const lang = localStorage.getItem("i18nextLng");

// the translations
const resources = {
    en: {
        translation: translationEN
    },
    hi: {
        translation: translationHI
    },
    guj:{
        translation: translationGUJ
    }
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next )
    .init({
        resources,
        lng: lang,
        keySeparator: false, 
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;