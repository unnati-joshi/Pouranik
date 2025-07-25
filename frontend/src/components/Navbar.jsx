import { Link, useLocation } from "react-router-dom";
import { Home, Search, BookMarked, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar({ isDarkMode, toggleTheme }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar-modern fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="navbar-container max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <Link
            to="/"
            className="navbar-logo flex items-center gap-x-3 animate-fade-in-left"
            data-tour="navbar-logo"
          >
            <div className="text-3xl">
              <BookOpen size={42} className="text-[#0f766e]" />
            </div>
            <div>
              <h1
                className="text-2xl font-bold"
                style={{ color: "var(--primary-700)" }}
              >
                Pouranik
              </h1>
              <p
                className="text-sm"
                style={{ color: "var(--text-muted)", marginTop: "-2px" }}
              >
                Book Discovery
              </p>
            </div>
          </Link>

          <div className="navbar-menu flex gap-2 items-center">
            {[
              { path: "/", label: "Home", icon: <Home size={18} /> },
              { path: "/explore", label: "Explore", icon: <Search size={18} /> },
              { path: "/genres", label: "Genres", icon: <BookMarked size={18} /> },
            ].map(({ path, label, icon }) => (
              <Link
                key={path}
                to={path}
                className={`navbar-link flex items-center gap-2 px-2.5 py-2 rounded-md transition-all duration-500 ease-in-out ${
                  isActive(path)
                    ? "bg-[#0f766e] text-white"
                    : "hover:underline hover:text-[#0f766e]"
                }`}
                data-tour={`navbar-link-${label.toLowerCase()}`}
              >
                <span className="text-base">{icon}</span>
                <span>{label}</span>
              </Link>
            ))}

            <button
              onClick={toggleTheme}
              className="theme-toggle flex items-center gap-2 px-3 py-2 rounded-md bg-[#0f766e] text-white hover:opacity-90 transition-all duration-500"
              aria-label="Toggle dark mode"
              data-tour="navbar-theme-toggle"
            >
              <span
                className="theme-icon transform transition-all duration-500 hover:scale-105"
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#0f766e",
                  color: "#fff",
                }}
              >
                {isDarkMode ? "☀️" : "🌙"}
              </span>
              <span className="theme-label">
                {isDarkMode ? "Light" : "Dark"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      <div style={{ height: "7rem" }}></div>
    </>
  );
}
