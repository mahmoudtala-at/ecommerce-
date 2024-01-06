import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()


// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
    

    let handleTheme = () => {
        setTheme(theme === 'light' ? () => 'dark' : 'light');
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])
    return (
        // eslint-disable-next-line no-undef
        <ThemeContext.Provider value={{ theme, handleTheme }}>{children}</ThemeContext.Provider>
    );
}

export default ThemeProvider;
