import React from 'react';
import { useTheme } from '../context/themecontext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`bg-${theme === 'light' ? 'gray-200' : 'gray-900'} py-4 px-6 flex justify-center items-center`}>
      <p className={`text-${theme === 'light' ? 'black' : 'white'}`}>© 2024 My App. All rights reserved.</p>

    </footer>
  );
};

export default Footer;

