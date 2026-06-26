import FilmList from "./component/filmList.jsx"
import { useState, useEffect } from "react"
function App() {
  const [theme, setTheme] = useState("light")
  const [favorites, setFavorites] = useState([])
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
      <FilmList 
      favorites= {favorites}
              onToggleFavorite = {onToggleFavorite}
      />
    </div>
  )
}

export default App
