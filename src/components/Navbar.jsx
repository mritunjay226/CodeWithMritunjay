import { scrollToSection } from "../utils/scroll";

export default function Navbar({ dark, setDark }) {
  const links = ["home", "about", "projects", "skills", "contact"];
  return (
    <header className="bg-white dark:bg-black text-black dark:text-white sticky top-0 z-50 shadow transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Mritunjay
        </h1>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="hover:text-gray-700 dark:hover:text-gray-300"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
        </nav>
        <button
          onClick={() => setDark(!dark)}
          className="ml-4 text-xl transition-transform duration-300 hover:scale-110"
          title="Toggle dark mode"
        >
          {dark ? "🌙" : "🌞"}
        </button>
      </div>
    </header>
  );
}
