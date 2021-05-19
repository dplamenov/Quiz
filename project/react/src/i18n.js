import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "Welcome to React": "Welcome to React and react-i18next",
            "Learn React": "Learn React",
            "body": "body"
        }
    },
    fr: {
        translation: {
            "Welcome to React": "Bienvenue à React et react-i18next",
            "Learn React": "Apprenez à réagir",
            "body": "corps"
        }
    },
    bg: {
        translation: {
            "Welcome to React": "Добре дошли в React и response-i18next",
            "Learn React": "Научи реакт",
            "body": "тяло"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: localStorage.getItem('lang') || 'en',
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;