export default function Footer() {
  return (
    <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-500">
      © {new Date().getFullYear()} Mritunjay. Built with React + Tailwind.
    </footer>
  );
}
