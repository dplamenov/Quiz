import i18n from "i18next";
import {initReactI18next} from "react-i18next";

const resources = {
    en: {
        translation: {
            "logo-text": "Quiz Game",
            "welcome-to-game": "WELCOME TO BEST QUIZ GAME"
        }
    },
    ge: {
        translation: {
            "logo-text": "Quizspiel",
            "welcome-to-game": "WILLKOMMEN ZUM BESTEN QUIZ-SPIEL"
        }
    },
    bg: {
        translation: {
            "logo-text": "Игра",
            "welcome-to-game": "ДОБРЕ ДОШЛИ В НАЙ-ДОБРАТА ИГРА"
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