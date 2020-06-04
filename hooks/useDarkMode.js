import useLocalStorage from './useLocalStorage.js';
import React, { useState, useEffect } from 'react';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
    
    useEffect(() => {
        if (darkMode){
            document.body.classList.add('dark-mode');
        }
        else{
            document.body.classList.remove("dark-mode");
        }
        
      }, [darkMode])

    return[darkMode, setDarkMode]
}

