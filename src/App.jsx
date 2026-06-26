import { useState, useEffect } from "react";
import MovieCard from "./compoments/movies";
import "./compoments/search.css";

function App() {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  setFilms([
    {
      id: "1",
      title: "Mon voisin Totoro",
      image: "https://image.tmdb.org/t/p/w500/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
      release_date: "1988",
      description: "Film de Studio Ghibli",
      rt_score: "93"
    }
  ]);
}, []);

  const filteredMovies = films.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button
        className="theme-button"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      <div className="search-container">
        <h1>Search a movie</h1>

        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="movies-container">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
}

export default App;