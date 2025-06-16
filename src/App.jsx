import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import initialMovies from "./data/data";

const App = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    darkMode
      ? html.classList.add("dark")
      : html.classList.remove("dark");
  }, [darkMode]);

  const handleAddMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    movie.rating >= ratingFilter
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <h1 className="text-4xl text-center font-bold py-6">🎬 My Movie App</h1>

      <div className="flex justify-center mb-4">
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="bg-gray-800 text-white px-4 py-2 rounded dark:bg-gray-200 dark:text-black"
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <Filter
        setTitleFilter={setTitleFilter}
        setRatingFilter={setRatingFilter}
      />
      <AddMovie onAdd={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
