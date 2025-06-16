import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import MovieDetail from "./components/MovieDetail";
import Navbar from "./components/Navbar";
import moviesData from "./data/data";

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    darkMode ? html.classList.add("dark") : html.classList.remove("dark");
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className="text-4xl text-center font-bold py-6">
                Welcome to the Movie App 🎬
              </h1>
              <Filter
                setTitleFilter={setTitleFilter}
                setRatingFilter={setRatingFilter}
              />
              <AddMovie onAdd={handleAddMovie} />
              <MovieList movies={filteredMovies} />
            </>
          }
        />
        <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
      </Routes>
    </div>
  );
};

export default App;
