import { Link } from "react-router-dom";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-yellow-400">
        🎬 Movie App
      </Link>

      <div className="flex items-center space-x-4">
        <Link to="/" className="text-gray-800 dark:text-gray-100 hover:underline">
          Home
        </Link>
        <button
          onClick={toggleDarkMode}
          className="flex items-center gap-2 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-sm dark:text-white"
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
