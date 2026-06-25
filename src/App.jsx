import { useState, useEffect } from "react";
import FilmList from "./components/FilmList";
import Favorites from "./components/Favorites";
import "./index.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [page, setPage] = useState("search");

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites =
      localStorage.getItem("favorites");

    return savedFavorites
      ? JSON.parse(savedFavorites)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : "light"
    );
  };

  const toggleFavorite = (film) => {
    const isFavorite = favorites.some(
      (fav) => fav.id === film.id
    );

    if (isFavorite) {
      setFavorites(
        favorites.filter(
          (fav) => fav.id !== film.id
        )
      );
    } else {
      setFavorites([...favorites, film]);
    }
  };

  return (
    <div className={`app ${theme}`}>
      <h1>Bonjour Sara</h1>

      <div className="header">
        <button
          onClick={() => setPage("search")}
        >
          Search
        </button>

        <button
          onClick={() => setPage("favorites")}
        >
          Favorites ({favorites.length})
        </button>

        <button onClick={toggleTheme}>
          {theme === "light"
            ? "Dark mode"
            : "Light mode"}
        </button>
      </div>

      {page === "search" ? (
        <FilmList
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      ) : (
        <Favorites
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
}

export default App;