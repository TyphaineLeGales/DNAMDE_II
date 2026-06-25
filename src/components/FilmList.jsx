import { useEffect, useState } from "react";
import Film from "./Film";

export default function FilmList() {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    fetch("/filmData.json")
      .then((res) => res.json())
      .then((data) => setFilms(data));
  }, []);

  const genres = [
    ...new Set(
      films.flatMap((film) => film.Genre.split(", "))
    ),
  ];

  const filteredFilms = films.filter((film) => {
    const matchTitle = film.Title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchGenre =
      selectedGenre === "" ||
      film.Genre.includes(selectedGenre);

    return matchTitle && matchGenre;
  });

  return (
    <>
      <div className="filters">
        <input
          type="text"
          placeholder="Rechercher un film..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="genres">
        <button
          className={selectedGenre === "" ? "active" : ""}
          onClick={() => setSelectedGenre("")}
        >
          Tous
        </button>

        {genres.map((genre) => (
          <button
            key={genre}
            className={selectedGenre === genre ? "active" : ""}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      {filteredFilms.length === 0 ? (
        <p className="no-result">No movies found</p>
      ) : (
        <div className="film-grid">
          {filteredFilms.map((film) => (
            <Film
              key={film.imdbID}
              title={film.Title}
              year={film.Year}
              image={film.Poster || film.Images?.[0]}
            />
          ))}
        </div>
      )}
    </>
  );
}