import { useState } from "react";
import { scrollToSection } from "../utils/scroll";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar({ dark, setDark }) {
  const links = ["home", "about", "projects", "skills", "contact"];
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const handleLinkClick = (link) => {
    scrollToSection(link);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white dark:bg-black text-black dark:text-white sticky top-0 z-50 shadow transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => handleLinkClick("home")}
        >
          Mritunjay
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleLinkClick(link)}
              className="hover:text-gray-700 dark:hover:text-gray-300"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-2">
          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="text-xl transition-transform duration-300 hover:scale-110"
            title="Toggle dark mode"
          >
            {dark ? "🌙" : "🌞"}
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden text-2xl ml-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black dark:bg-white z-40"
              onClick={toggleMenu}
              style={{ backdropFilter: "blur(2px)" }}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="fixed top-0 right-0 h-full w-3/4 sm:w-2/5 bg-white dark:bg-gray-900 z-50 shadow-lg px-6 py-10 space-y-6"
            >
              <h2 className="text-lg font-semibold mb-4">Navigation</h2>
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => handleLinkClick(link)}
                  className="block w-full text-left py-2 px-3 rounded text-base hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </button>
              ))}

              <div className="pt-6 border-t border-gray-300 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Theme:{" "}
                  <span className="font-semibold">
                    {dark ? "Dark" : "Light"}
                  </span>
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
