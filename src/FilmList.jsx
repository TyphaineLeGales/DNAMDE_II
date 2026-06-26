import { useEffect, useState } from "react";
import Film from "./Film";

function FilmList() {
  const [filmData, setFilmData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedDirector, setSelectedDirector] = useState("All");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films")
      .then((response) => response.json())
      .then((data) => setFilmData(data))
      .catch((error) => console.error(error));
  }, []);

  const directors = [
    "All",
    ...new Set(filmData.map((film) => film.director)),
  ];

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((movieId) => movieId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const filteredMovies = filmData.filter((film) => {
    const matchTitle = film.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchDirector =
      selectedDirector === "All" ||
      film.director === selectedDirector;

    return matchTitle && matchDirector;
  });

  const favoriteMovies = filmData.filter((film) =>
    favorites.includes(film.id)
  );

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search a movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="tags">
        {directors.map((director) => (
          <button
            key={director}
            className={
              selectedDirector === director
                ? "tag active"
                : "tag"
            }
            onClick={() => setSelectedDirector(director)}
          >
            {director}
          </button>
        ))}
      </div>

      {favoriteMovies.length > 0 && (
        <>
          <h2 className="section-title">
            ❤️ Mes favoris
          </h2>

          <div className="film-grid">
            {favoriteMovies.map((film) => (
              <Film
                key={film.id}
                title={film.title}
                year={film.release_date}
                poster={film.image}
                director={film.director}
                rating={film.rt_score}
                isFavorite={true}
                toggleFavorite={() =>
                  toggleFavorite(film.id)
                }
              />
            ))}
          </div>
        </>
      )}

      <h2 className="section-title">
        Studio Ghibli
      </h2>

      {filteredMovies.length > 0 ? (
        <div className="film-grid">
          {filteredMovies.map((film) => (
            <Film
              key={film.id}
              title={film.title}
              year={film.release_date}
              poster={film.image}
              director={film.director}
              rating={film.rt_score}
              isFavorite={favorites.includes(film.id)}
              toggleFavorite={() =>
                toggleFavorite(film.id)
              }
            />
          ))}
        </div>
      ) : (
        <h2 className="no-movie">
          Aucun film trouvé 😢
        </h2>
      )}
    </>
  );
}

export default FilmList;