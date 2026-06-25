import { useEffect, useState } from "react";
import Film from "./Film";
import Loading from "./Loading";

export default function FilmList() {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /*fetch("/filmData.json")*/
    fetch("https://ghibliapi.vercel.app/films")
      .then((res) => res.json())
      .then((data) => {
        setFilms(data);
        setLoading(false);
      });
  }, []);

  const filteredFilms = films.filter((film) =>
    film.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <Loading />;
  }

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

      {filteredFilms.length === 0 ? (
        <p className="no-result">No movies found</p>
      ) : (
        <div className="film-grid">
          {filteredFilms.map((film) => (
            <Film
              key={film.id}
              title={film.title}
              year={film.release_date}
              image={film.image}
              rating={film.rt_score}
              plot={film.description}
            />
          ))}
        </div>
      )}
    </>
  );
}