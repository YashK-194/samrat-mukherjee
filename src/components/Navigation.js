"use client";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove the # from href
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }

    closeMenu(); // Close mobile menu if open
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#corporate-training", label: "Corporate Training" },
    { href: "#college-training", label: "College Training" },
    { href: "#courses", label: "Courses" },
    { href: "#testimonials", label: "Success Stories" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-red-900/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* <div className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent"> */}
          <div className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Samrat Mukherjee
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm lg:text-base text-red-200 hover:text-red-400 transition-colors py-2 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#start"
              onClick={(e) => handleNavClick(e, "#start")}
              className="bg-gradient-to-r from-red-500 to-red-700 text-white px-4 lg:px-6 py-2 rounded-full hover:from-red-600 hover:to-red-800 transition-all text-sm lg:text-base cursor-pointer"
            >
              Start Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-red-200 hover:text-red-400 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg
              className={`w-6 h-6 transform transition-transform duration-200 ${
                isMenuOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-4 pt-2 border-t border-red-800/50">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-red-200 hover:text-red-400 transition-colors py-2 px-2 rounded-md hover:bg-red-900/50 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#start"
                onClick={(e) => handleNavClick(e, "#start")}
                className="bg-gradient-to-r from-red-500 to-red-700 text-white px-4 py-2 rounded-full hover:from-red-600 hover:to-red-800 transition-all text-center mt-2 cursor-pointer"
              >
                Start Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
