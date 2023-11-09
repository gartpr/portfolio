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
        if (themeName === 'dark') {
            document.getElementById("theme-style").href = "dark.css";
        } else {
            document.getElementById("theme-style").href = "light.css";
        }
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
