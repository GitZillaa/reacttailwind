import React from 'react';
import { ThemeProvider } from './context/themecontext';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import './index.css';

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
