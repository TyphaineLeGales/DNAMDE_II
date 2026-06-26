import FilmList from "./component/filmList.jsx"
import { useState, useEffect } from "react"
import Favorites from "./component/favoris.jsx"
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"

function App() {
  const [theme, setTheme] = useState("light")
  //const [favorites, setFavorites] = useState([])
  //const [page, setPage] = useState("search")
  const [filmData, setFilmData] = useState([])

  const [favorites, setFavorites] = useState(() => {
  const saved = localStorage.getItem("favorites")
  return saved ? JSON.parse(saved) : []
})
  // pour que cela s'applique partout.
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  // appel de la fonction onToogleFavorite

  const onToggleFavorite = (title) => {
    if (favorites.includes(title)) { 
      setFavorites(favorites.filter((f) => f !== title))
    } else { 
      setFavorites([...favorites, title])
    }
  }



    useEffect (() => {
    fetch("https://ghibliapi.vercel.app/films/")
        .then((response) => response.json())
        .then((data) => {
       //ici data va être le tableau de film
        setFilmData(data)
    })}, [])

    useEffect (() => {
      localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])


  return (
    <BrowserRouter>

    <div className={theme === "dark" ? "dark" : "light"}>
      <div className="wrapp-theme">
        <button 
        onClick = {() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}>
          {theme}
        </button>
      </div>
      <div className="wrapp-pages">
        {/*<button className="button-page-search" onClick={() => setPage("search")}>
          SEARCH
        </button>
        <button className="button-page-search" onClick={() => setPage("favoris")}>
          FAVORIS
        </button>*/}

        <Link className="button-page-search" to="/search">SEARCH</Link>
        <Link className="button-page-search" to="/favoris">favoris</Link>
        </div>
            <Routes>

        <Route path="/search" element={<FilmList favorites= {favorites} onToggleFavorite = {onToggleFavorite} filmData = {filmData}/>} />
        <Route path="/favoris" element={<Favorites filmData = {filmData} favorites= {favorites} onToggleFavorite = {onToggleFavorite}/>} />
            </Routes>
    
      {/* {page === "search" ?<FilmList favorites= {favorites} onToggleFavorite = {onToggleFavorite} filmData = {filmData}/> : 
      <Favorites filmData = {filmData} favorites= {favorites} onToggleFavorite = {onToggleFavorite}/>}*/}



    </div>

  </BrowserRouter>
  )
}

export default App
