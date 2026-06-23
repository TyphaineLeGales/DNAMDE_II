import { useEffect, useState } from 'react';
import filmData from './assets/filmData.json?raw';
import FilmList from './components/filmList';


const jsonData = JSON.parse(filmData);
console.log(filmData)

function App() {

  //recherche
  const [userInput, setUserInput] = useState("")
  // const filteredFilms = jsonData.includes(userInput, setUserInput)
  const filteredFilms = jsonData.filter((movie) => movie.Title.toLowerCase().includes(userInput.toLowerCase()))

  useEffect(() => {
    filteredFilms
  }, [userInput])

  return (
    <div className='films-container'>
      <div className='search-container'>
        <label>
          Rechercher un film :
          <input className='search-input' value={userInput} onChange={e => setUserInput(e.target.value)}/>
        </label>
      </div>
      <FilmList film={filteredFilms}/>
    </div>
  )

}

export default App
