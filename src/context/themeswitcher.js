import React from 'react';
import { useTheme } from './themecontext';
import { Sun, Moon } from 'react-feather'; 

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`rounded-full w-8 h-8 flex justify-center items-center ${
        theme === 'dark' ? 'bg-gray-300' : 'bg-gray-700'
      }`}
      onClick={toggleTheme}
    >
      {theme === 'light' ? <Moon size={18} color="#0F0D08" /> : <Sun size={18} color="#FFD500" />}
    </div>
  );
};

export default ThemeSwitcher;
