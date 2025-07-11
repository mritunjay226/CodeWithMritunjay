export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 mt-12 px-6 py-8 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        {/* Left */}
        <p className="text-gray-500 dark:text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-semibold text-black dark:text-white">Mritunjay</span>. Built with ❤️ using React & Tailwind CSS.
        </p>

        {/* Right: Social or Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/mritunjay226"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
            aria-label="GitHub"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.372 0 0 5.373 0 12a12 12 0 008.208 11.387c.6.112.82-.262.82-.582v-2.04c-3.338.726-4.042-1.609-4.042-1.609-.546-1.388-1.332-1.756-1.332-1.756-1.088-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.833 2.809 1.303 3.492.997.108-.775.419-1.304.762-1.604-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.468-2.381 1.235-3.222-.124-.303-.536-1.524.118-3.176 0 0 1.008-.322 3.3 1.23a11.518 11.518 0 013.003-.403 11.51 11.51 0 013.003.403c2.29-1.552 3.296-1.23 3.296-1.23.656 1.652.244 2.873.12 3.176.77.841 1.232 1.912 1.232 3.222 0 4.61-2.803 5.624-5.474 5.922.43.371.823 1.103.823 2.223v3.293c0 .322.218.698.826.58A12.002 12.002 0 0024 12c0-6.627-5.373-12-12-12z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
<<<<<<< HEAD
            href="https://www.linkedin.com/in/mritunjay-mishra-2275b3373"
=======
            href="https://www.linkedin.com/in/yourprofile"
>>>>>>> 9c178e0 (hello)
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 transition"
            aria-label="LinkedIn"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 
                   2.76 2.24 5 5 5h14c2.76 0 5-2.24 
                   5-5v-14c0-2.76-2.24-5-5-5zm-11 
                   19h-3v-10h3v10zm-1.5-11.28c-.97 
                   0-1.75-.79-1.75-1.75s.78-1.75 
                   1.75-1.75 1.75.79 
                   1.75 1.75-.78 1.75-1.75 
                   1.75zm13.5 11.28h-3v-5.5c0-1.1-.9-2-2-2s-2 
                   .9-2 2v5.5h-3v-10h3v1.3c.62-.9 
                   1.62-1.3 2.5-1.3 1.93 0 
                   3.5 1.57 3.5 3.5v6.5z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
