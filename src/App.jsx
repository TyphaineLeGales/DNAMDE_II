import { useState } from "react";
import MovieCard from "./movies";
import moviesData from "./assets/filmData.json";
import Filtres from "./filtre";
import "./index.css"
import "./search.css"


function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const filteredMovies = moviesData.filter((movie) => {
    const titleMatch = movie.Title
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      !category ||
      movie.Genre.toLowerCase().includes(category.toLowerCase());

    return titleMatch && categoryMatch;
  });

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button
        className="theme-button"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      <div className="search-container">
        <p>Search a movie</p>

        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <Filtres
        movies={moviesData}
        category={category}
        setCategory={setCategory}
      />

      <div className="movies-container">
        {filteredMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;