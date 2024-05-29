import React from 'react';
import ThemeSwitcher from '../context/themeswitcher';
import { useTheme } from '../context/themecontext';

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className={`bg-${theme === 'light' ? 'white' : 'gray-800'} py-4 px-6 flex justify-between items-center`}>
      <h1 className={`text-${theme === 'light' ? 'black' : 'white'} text-lg font-semibold`}>Ich mag kein Frontend</h1>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;




