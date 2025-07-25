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

    const debouncedToggleVisibility = useCallback(() => {
        let timeoutId;
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                toggleVisibility();
            }, 100);
        };
    }, [toggleVisibility])();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        if (document.documentElement) {
            document.documentElement.scrollTop = 0;
        }
        if (document.body) {
            document.body.scrollTop = 0;
        }
    };

    useEffect(() => {
        const handleScroll = debouncedToggleVisibility;
        handleScroll(); // call it once on mount

        window.addEventListener("scroll", handleScroll, { passive: true });
        document.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("scroll", handleScroll);
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
