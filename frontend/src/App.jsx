import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTopButton from "./components/_global/ScrollToTop";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="app-gradient">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="main-content">
        <div className="page-wrapper">
          <AppRoutes />
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
