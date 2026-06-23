import FilmList from './components/FilmList';
import Filter from './components/Filter';
import filmData from './assets/filmData.json';
import {useState} from "react";
import Genres from './components/Genres';

function App() {
  const [filter, setFilter] = useState("");

  const filteredFilms = filmData.filter((film) =>
  film.Title.toLowerCase().includes(filter.toLowerCase())
  );

  const genres = [
    ...new Set(
    filmData.flatMap((film) => film.Genre.split(", "))
    )
  ];

  return (
    <div className="listedefilms">
    <h1>Liste de films</h1>

    <Filter filter={filter} setFilter={setFilter} />
    <Genres genres={genres} />

    {filteredFilms.length === 0 ? (
    <p>No movies found</p>
    ) : (
    <FilmList films={filteredFilms} />
  )}

  
    </div>
  );
}

export default App;