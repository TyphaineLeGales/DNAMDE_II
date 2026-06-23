import { useState } from "react";
import filmData from "./assets/filmData.json";
import Film from "./Film";

function FilmList() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  // Récupère tous les genres sans doublon
  const genres = [
    "All",
    ...new Set(
      filmData.flatMap((film) =>
        film.Genre.split(", ").map((genre) => genre.trim())
      )
    ),
  ];

  // Filtre recherche + genre
  const filteredMovies = filmData.filter((film) => {
    const matchTitle = film.Title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchGenre =
      selectedGenre === "All" ||
      film.Genre.includes(selectedGenre);

    return matchTitle && matchGenre;
  });

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search a movie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="tags">
        {genres.map((genre) => (
          <button
            key={genre}
            className={
              selectedGenre === genre ? "tag active" : "tag"
            }
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      {filteredMovies.length > 0 ? (
        <div className="film-grid">
          {filteredMovies.map((film) => (
            <Film
              key={film.imdbID}
              title={film.Title}
              year={film.Year}
              poster={film.Images[0]}
              genre={film.Genre}
              rating={film.imdbRating}
            />
          ))}
        </div>
      ) : (
        <h2 className="no-movie">No movie found 😢</h2>
      )}
    </>
  );
}

export default FilmList;