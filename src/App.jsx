import FilmList from "./component/filmList.jsx"
import { useState, useEffect } from "react"
import Favorites from "./component/favoris.jsx"
function App() {
  const [theme, setTheme] = useState("light")
  const [favorites, setFavorites] = useState([])
  const [page, setPage] = useState("search")
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

  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <div className="wrapp-theme">
        <button 
        onClick = {() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}>
          {theme}
        </button>
      </div>
      <div className="wrapp-pages">
        <button className="button-page-search" onClick={() => setPage("search")}>
          SEARCH
        </button>
        <button className="button-page-search" onClick={() => setPage("favoris")}>
          FAVORIS
        </button>
      </div>
      {page === "search" ?<FilmList 
      favorites= {favorites}
              onToggleFavorite = {onToggleFavorite}
      /> : <Favorites />}
    </div>
  )
}

export default App
