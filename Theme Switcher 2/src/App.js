import logo from './logo.svg';
import './App.css';
import ThemeContext from './Context/ThemeContext';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import { useState } from 'react';

function App() {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <Header />
      <HeroSection/>
    </ThemeContext.Provider>
  );
}

export default App;
