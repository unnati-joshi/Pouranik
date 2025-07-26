import { Link, useLocation } from 'react-router-dom';
import { Home, Search, BookMarked, BookOpen, Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from 'react';
import { IoLibraryOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true if token exists
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    sessionStorage.setItem("showLogoutToast", "true");
    navigate('/');
  };

  return (
    <nav className="navbar-modern">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" data-tour="navbar-logo">
          <div className="text-2xl">
            <BookOpen size={45} className="text-[#0f766e]" />
          </div>
          <div>
            <h1 className="Titlebar" style={{ color: "var(--primary-600)" }}>
              Pouranik
            </h1>
            <p
              className="Subtitle"
              style={{ color: "var(--text-muted)", marginTop: "-5px" }}
            >
              Book Discovery
            </p>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-toggle hidden max-md:flex"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        {isLoggedIn ? (
          <div className="navbar-menu hidden md:flex">
            {[
              { path: '/', label: 'Home', icon: <Home size={18} /> },
              { path: '/explore', label: 'Explore', icon: <Search size={18} /> },
              { path: '/genres', label: 'Genres', icon: <BookMarked size={18} /> },
              { path: '/library', label: 'Your Library', icon: <IoLibraryOutline size={18} /> }
            ].map(({ path, label, icon }) => (
              <Link
                key={path}
                to={path}
                className={`navbar-link ${isActive(path) ? "active" : ""}`}
              >
                <span className="text-base">{icon}</span>
                <span>{label}</span>
              </Link>
            ))}
            {/* Logout */}
            <button onClick={handleLogout} className="theme-toggle">
              Logout
            </button>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle dark mode"
            >
              <span className="theme-icon">
                {isDarkMode ? '☀️' : '🌙'}
              </span>
              <span className="theme-label">
                {isDarkMode ? 'Light' : 'Dark'}
              </span>
            </button>
          </div>
        ) : (
          <div className="navbar-menu hidden md:flex">
            {[
              { path: '/', label: 'Home', icon: <Home size={18} /> },
              { path: '/explore', label: 'Explore', icon: <Search size={18} /> },
              { path: '/genres', label: 'Genres', icon: <BookMarked size={18} /> },
              { path: '/signup', label: 'Get Started' }
            ].map(({ path, label, icon }) => (
              <Link
                key={path}
                to={path}
                className={`navbar-link ${isActive(path) ? "active" : ""}`}
                data-tour={`navbar-link-${label.toLowerCase()}`}
              >
                <span className="text-base">{icon}</span>
                <span>{label}</span>
              </Link>
            ))}
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu md:hidden">
            <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
            <div className="mobile-menu-content">
              {[
                { path: "/", label: "Home", icon: <Home size={20} /> },
                { path: "/explore", label: "Explore", icon: <Search size={20} /> },
                { path: "/genres", label: "Genres", icon: <BookMarked size={20} /> }
              ].map(({ path, label, icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`mobile-menu-link ${isActive(path) ? "active" : ""}`}
                  onClick={closeMobileMenu}
                  data-tour={`mobile-navbar-link-${label.toLowerCase()}`}
                >
                  <span className="mobile-menu-icon">{icon}</span>
                  <span className="mobile-menu-label">{label}</span>
                </Link>
              ))}

              {/* Dark Mode Toggle - Mobile */}
              <button
                onClick={() => {
                  toggleTheme();
                  closeMobileMenu();
                }}
                className="mobile-theme-toggle"
                aria-label="Toggle dark mode"
              >
                <span className="mobile-menu-icon">
                  {isDarkMode ? (
                    <Sun size={20} className="text-yellow-500" />
                  ) : (
                    <Moon size={20} className="text-blue-900" />
                  )}
                </span>
                <span className="mobile-menu-label">
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </span>
              </button>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}