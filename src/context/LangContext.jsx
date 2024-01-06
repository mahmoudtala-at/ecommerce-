import { createContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {
    const { i18n } = useTranslation()

    let handleLanguage = () => {
        i18n.language === 'en' ? i18n.changeLanguage('ar') : i18n.changeLanguage('en')
    }

    useEffect(() => {
        localStorage.setItem('language', i18n.language)
    }, [i18n.language])

    return (
        <LanguageContext.Provider value={{ handleLanguage }}>{children}</LanguageContext.Provider>
    );
}

export default LanguageProvider;