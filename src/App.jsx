import { useEffect, useState } from 'react';
// import filmData from './assets/filmData.json?raw';
import FilmList from './components/filmList';
import DirectorList from './components/directorList'
import { ThemeProvider } from './components/theme';


// const jsonData = JSON.parse(userData);

function App() {

  //get film Ghibli data
  const [userData, setUserData] = useState([])

  const getFilmData = async () => {
    const url="https://ghibliapi.vercel.app/films/";
    let response = await fetch(url);
    response = await response.json();
    console.log(response)
    setUserData(response)
  }
  
  useEffect(() => {
    getFilmData();
  }, [])

  //recherche
  const [userInput, setUserInput] = useState("")
  const [selectedDirector, setSelectedDirector] = useState("All")
  const [theme, setTheme] = useState('light');

  const isInSearch = (movie) => {
    return movie.title.toLowerCase().includes(userInput.toLowerCase())
  }

  const isInDirectorFilter = (movie) => {
    if(selectedDirector !== "All" ) {
      return movie.director.includes(selectedDirector)
    } else {
      return true
    }
    
  }
  const filteredFilms = userData.filter(
    (movie) => isInSearch(movie) && isInDirectorFilter(movie)
  ) 

  const directors = userData.map(film => film.director.split(", "));
  const directorsSet = [...new Set(['All', ...directors.flat()])];

  //dark - light mode
  const [isDarkModeActive, setIsDarkModeACtive] = useState(false)

  const switchModes = (mode) => {
    if(mode === "light") {
      setIsDarkModeACtive(false)
    } else if (mode === "dark") {
      setIsDarkModeACtive(true)
    }
  }

  useEffect(() => {
    if(isDarkModeActive) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  })


  return (
    <ThemeProvider value={theme}>
      <div className='films-container'>
        <div className='header'>
          <div className='search-container'>
            <label className={isDarkModeActive ? "search-title-dark" : ""}>
              Rechercher un film :
              <input className='search-input' value={userInput} onChange={e => setUserInput(e.target.value)}/>
            </label>
          </div>
          <DirectorList director={directorsSet} setSelectedDirector={setSelectedDirector} selectedDirector={selectedDirector} isDarkModeActive={isDarkModeActive}/>
        </div>
        <FilmList film={filteredFilms} isDarkModeActive={isDarkModeActive}/>
        
        <button className={isDarkModeActive ? "toggle-dark" : "toggle-light"}>
            <h4 className='light-mode' onClick={() => switchModes("light")}>Light</h4>
            <h4 className='dark-mode' onClick={() => switchModes("dark")}>Dark</h4>
        </button>
      </div>
    </ThemeProvider>
  )

}

export default App
