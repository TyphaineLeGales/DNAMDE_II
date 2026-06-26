import { useState, useEffect } from "react";
import FilmList from "./components/FilmList";
import Favorites from "./components/Favorites";
import MovieDetails from "./components/MovieDetails";
import "./index.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("dark");

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");

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
    <BrowserRouter>
      <div className={`app ${theme}`}>

        <h1>Bonjour Sara</h1>

        <div className="header">
          <Link to="/search">
            <button>Search</button>
          </Link>

          <Link to="/favorites">
            <button>
              Favorites ({favorites.length})
            </button>
          </Link>

          <button onClick={toggleTheme}>
            {theme === "light"
              ? "Dark mode"
              : "Light mode"}
          </button>
        </div>

        <Routes>

          <Route
            path="/search"
            element={
              <FilmList
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />

          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />

          <Route
            path="/movie/:id"
            element={<MovieDetails />}
          />

          <Route
            path="*"
            element={
              <FilmList
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;