import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import es from './locales/es.json'
import en from './locales/en.json'

i18next.use(initReactI18next).init({
    resources: {
        en: {
            translation: en
        },
        es: {
            translation: es
        },
    },
    lng: 'es', //Lenguaje por defecto
    fallbackLng: 'en', //Lenguaje alternativo
    
    interpolation: {
        escapeValue: false,
    },
});

export default i18next;