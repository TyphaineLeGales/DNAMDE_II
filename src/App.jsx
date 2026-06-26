import FilmList from './components/FilmList';
import Filter from './components/Filter';
import {useState} from "react";
import Genres from './components/Genres';
import { useEffect } from 'react';


function App() {
  const [filter, setFilter] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [mode, setMode] = useState('light');
  const [films, setFilms] = useState([]);
 

  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    }, [mode]);

  
  const API_URL = `https://ghibliapi.vercel.app/films/`;

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setFilms(data);
    };

    loadData();
  }, [API_URL]);


 
      



  const filteredFilms = films.filter((film) => {
    console.log(film)
  // const genres = film.Genre.split(", ");

    const matchtitle = film.title.toLowerCase().includes(filter.toLowerCase());
    // console.log(filter);
    
    const matchGenre = 
    selectedGenre === ""  || genres.includes(selectedGenre);
    

    return matchtitle && matchGenre;
  });

  const genres = [
    ...new Set(
      films.flatMap((film) => film.director.split(", "))
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