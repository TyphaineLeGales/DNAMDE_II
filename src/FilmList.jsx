import filmData from "./assets/filmData.json";
import Film from "./Film";

function FilmList() {
  return (
    <div className="film-grid">
      {filmData.map((film) => (
        <Film
          key={film.imdbID}
          title={film.Title}
          year={film.Year}
          poster={film.Poster}
          genre={film.Genre}
          rating={film.imdbRating}
        />
      ))}
    </div>
  );
}

export default FilmList;