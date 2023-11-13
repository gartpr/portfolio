import React, { useState, useEffect } from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            setDarkMode(true);
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    const setTheme = (themeName) => {
        document.getElementById("theme-style").href = `${process.env.PUBLIC_URL}/${themeName}.css`
    };

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            const themeName = newMode ? 'dark' : 'light';
            localStorage.setItem('theme', themeName);
            setTheme(themeName);
            return newMode;
        });
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
