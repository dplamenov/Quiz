import React from "react";
import i18n from '../i18n.js'

function SelectLanguage() {
    const languages = ['bg', 'en', 'ge'];

    const changeLanguageHandler = (lang) => {
        return () => {
            i18n.changeLanguage(lang);
            localStorage.setItem('lang', lang);
        }
    }

    return (
        <>
            {languages.map(lang => {
                return <img src={`images/lang/${lang}.png`} alt={lang} key={lang} onClick={changeLanguageHandler(lang)}/>
            })}
        </>
    );
}

export default SelectLanguage;