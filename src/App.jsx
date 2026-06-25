import FilmList from './components/FilmList';
import Filter from './components/Filter';
import filmData from './assets/filmData.json';
import {useState} from "react";
import Genres from './components/Genres';
import { useEffect } from 'react';



function App() {
  const [filter, setFilter] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [mode, setMode] = useState('light'); 

  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    }, [mode]);

  const filteredFilms = filmData.filter((film) => {
  const genres = film.Genre.split(", ");

  const matchTitle = film.Title.toLowerCase().includes(filter.toLowerCase());
  // console.log(filter);
  
  const matchGenre = 
  selectedGenre === ""  || genres.includes(selectedGenre);
  

  return matchTitle && matchGenre;
  });

  const genres = [
    ...new Set(
      filmData.flatMap((film) => film.Genre.split(", "))
    )
  ];


  return (
    <div className="listedefilms">
    <h1>Liste de films</h1>

    <Filter filter={filter} setFilter={setFilter} />
    <Genres 
    genres={genres}
    selectedGenre={selectedGenre}
    setSelectedGenre={setSelectedGenre} />

    {filteredFilms.length === 0 ? (
    <p>No movies found</p>
    ) : (
    <FilmList films={filteredFilms} />
  )}

  <div className = 'container'/>
  <span className='mode-switch'
  onClick={() =>
  setMode(mode === 'dark' ? 'light' : 'dark')
  }>
  {mode === 'dark' ? 'Light mode' : 'Dark mode'}
</span>
    </div>
  );
}

export default App;