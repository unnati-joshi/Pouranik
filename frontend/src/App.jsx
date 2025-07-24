import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTopButton from "./components/_global/ScrollToTop";
import TourOverlay from "./components/TourOverlay";
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

  // --- Custom Tour Guide State ---
  const tourSteps = [
    {
      selector: "navbar-logo",
      title: "Welcome to Pouranik!",
      content: "This is the logo and home link. Click here anytime to return to the homepage.",
    },
    {
      selector: "navbar-link-home",
      title: "Home Navigation",
      content: "Use this link to go to the home page.",
    },
    {
      selector: "navbar-link-explore",
      title: "Explore Books",
      content: "Browse and discover new books here!",
    },
    {
      selector: "navbar-link-genres",
      title: "Genres",
      content: "Find books by your favorite genres.",
    },
    {
      selector: "navbar-theme-toggle",
      title: "Theme Toggle",
      content: "Switch between light and dark mode.",
    },
    {
      selector: "start-exploring-section",
      title: "Start Exploring",
      content: "Begin your journey by exploring our curated book selections.",
    },
    {
      selector: "browse-genre-section",
      title: "Browse Genre",
      content: "Browse books by your favorite genres for a personalized experience.",
    },
    {
      selector: "why-choose-pouranik-section",
      title: "Why Choose Pouranik?",
      content: "Discover what makes Pouranik unique for book lovers.",
    },
    {
      selector: "powered-by-google-books-section",
      title: "Powered by Google Books",
      content: "Our data is powered by Google Books for comprehensive results.",
    },
    {
      selector: "find-next-books-section",
      title: "Find Your Next Books",
      content: "Use our features to find your next great read!",
    },
    {
      selector: "footer-section",
      title: "Footer",
      content: "Find links, credits, and more information in the footer.",
    },
  ];
  const [tourStep, setTourStep] = useState(0);
  const [tourOpen, setTourOpen] = useState(false);

  // Scroll to the highlighted element on step change
  useEffect(() => {
    const selector = tourSteps[tourStep]?.selector;
    if (selector) {
      setTimeout(() => {
        const el = document.querySelector(`[data-tour="${selector}"]`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100); // 100ms delay to ensure DOM is ready
    }
  }, [tourStep, tourOpen]);

  useEffect(() => {
    // Show tour on every refresh
    setTimeout(() => setTourOpen(true), 800); // slight delay for UI mount
  }, []);

  const handleTourNext = () => setTourStep((s) => Math.min(s + 1, tourSteps.length - 1));
  const handleTourPrev = () => setTourStep((s) => Math.max(s - 1, 0));
  const handleTourClose = () => setTourOpen(false);

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
      <TourOverlay
        step={{ ...tourSteps[tourStep], index: tourStep }}
        totalSteps={tourSteps.length}
        onNext={handleTourNext}
        onPrev={handleTourPrev}
        onClose={handleTourClose}
        visible={tourOpen}
      />
    </div>
  );
}

export default App;
