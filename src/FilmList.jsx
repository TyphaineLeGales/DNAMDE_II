import { useState } from "react";
import filmData from "./assets/filmData.json";
import Film from "./Film";

function FilmList() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [favorites, setFavorites] = useState([]);

  const genres = [
    "All",
    ...new Set(
      filmData.flatMap((film) =>
        film.Genre.split(", ").map((genre) => genre.trim())
      )
    ),
  ];

  const toggleFavorite = (movieId) => {
    if (favorites.includes(movieId)) {
      setFavorites(
        favorites.filter((id) => id !== movieId)
      );
    } else {
      setFavorites([...favorites, movieId]);
    }
  };

  const filteredMovies = filmData.filter((film) => {
    const matchTitle = film.Title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchGenre =
      selectedGenre === "All" ||
      film.Genre.includes(selectedGenre);

    return matchTitle && matchGenre;
  });

  const favoriteMovies = filmData.filter((film) =>
    favorites.includes(film.imdbID)
  );

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search a movie..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <div className="tags">
        {genres.map((genre) => (
          <button
            key={genre}
            className={
              selectedGenre === genre
                ? "tag active"
                : "tag"
            }
            onClick={() =>
              setSelectedGenre(genre)
            }
          >
            {genre}
          </button>
        ))}
      </div>

      {favoriteMovies.length > 0 && (
        <>
          <h2 className="section-title">
            Mes favoris
          </h2>

          <div className="film-grid">
            {favoriteMovies.map((film) => (
              <Film
                key={film.imdbID}
                title={film.Title}
                year={film.Year}
                poster={film.Poster}
                genre={film.Genre}
                rating={film.imdbRating}
                isFavorite={true}
                toggleFavorite={() =>
                  toggleFavorite(film.imdbID)
                }
              />
            ))}
          </div>
        </>
      )}

      <h2 className="section-title">
        Tous les films
      </h2>

      {filteredMovies.length > 0 ? (
        <div className="film-grid">
          {filteredMovies.map((film) => (
            <Film
              key={film.imdbID}
              title={film.Title}
              year={film.Year}
              poster={film.Poster}
              genre={film.Genre}
              rating={film.imdbRating}
              isFavorite={favorites.includes(
                film.imdbID
              )}
              toggleFavorite={() =>
                toggleFavorite(film.imdbID)
              }
            />
          ))}
        </div>
      ) : (
        <h2 className="no-movie">
          No movie found 😢
        </h2>
      )}
    </>
  );
}

export default FilmList; 