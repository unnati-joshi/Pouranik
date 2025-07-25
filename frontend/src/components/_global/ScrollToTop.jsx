import React, { useState, useEffect, useCallback } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    const currentScrollPos =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    setIsVisible(currentScrollPos > 300);
  }, []);

  const debounce = (func, delay) => {
    let timer;
    return () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(func, delay);
    };
  };

  const debouncedToggleVisibility = useCallback(debounce(toggleVisibility, 100), [toggleVisibility]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  useEffect(() => {
    debouncedToggleVisibility(); // call once on mount

    window.addEventListener("scroll", debouncedToggleVisibility, { passive: true });
    document.addEventListener("scroll", debouncedToggleVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", debouncedToggleVisibility);
      document.removeEventListener("scroll", debouncedToggleVisibility);
    };
  }, [debouncedToggleVisibility]);

  return (
    <div className="fixed bottom-5 right-5 z-[99]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{ backgroundColor: "#0d9488" }}
          className="text-white border-none rounded-full w-[50px] h-[50px] text-5xl cursor-pointer flex items-center justify-center shadow-md"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
