import React from 'react';
import { useTheme } from '../context/themecontext';

const Main = () => {
  const { theme } = useTheme(); 

  return (
    <main className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="container mx-auto px-3">
        <h1 className="text-3xl font-bold mt-8">Lirum Larum Löffelstiel</h1>
        <p className="text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>
    </main>
  );
};

export default Main;
