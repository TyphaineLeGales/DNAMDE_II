import { useEffect, useState } from 'react';
import filmData from './assets/filmData.json?raw';
import FilmList from './components/filmList';
import GenreList from './components/genreList'


const jsonData = JSON.parse(filmData);

function App() {

  //recherche
  const [userInput, setUserInput] = useState("")
  // const filteredFilms = jsonData.includes(userInput, setUserInput)
  const [selectedGenre, setSelectedGenre] = useState("All")
  console.log(selectedGenre)
    const isInSearch = (movie) => {
    return movie.Title.toLowerCase().includes(userInput.toLowerCase())
  }

  const isInGenreFilter = (movie) => {
    if(selectedGenre !== "All" ) {
      return movie.Genre.includes(selectedGenre)
    } else {
      return true
    }
    
  }
  const filteredFilms = jsonData.filter(
    (movie) => isInSearch(movie) && isInGenreFilter(movie)
  ) 



 
  const genres = jsonData.map(film => film.Genre.split(", "));
  const genresSet = [...new Set(['All', ...genres.flat()])];

  // useEffect(() => {
  //   filteredFilms
  // }, [userInput])

  return (
    <div className='films-container'>
      <div className='search-container'>
        <label>
          Rechercher un film :
          <input className='search-input' value={userInput} onChange={e => setUserInput(e.target.value)}/>
        </label>
      </div>
      <GenreList genre={genresSet} setSelectedGenre={setSelectedGenre} selectedGenre={selectedGenre}/>
      <FilmList film={filteredFilms}/>
      
      <button className="theme-btn">
          <p>Dark mode</p>
      </button>
    </div>
  )

}

export default App
