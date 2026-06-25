import FilmList from "./component/filmList.jsx"
import { useState, useEffect } from "react"
function App() {
  const [theme, setTheme] = useState("light")

  // pour que cela s'applique partout.
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  // appel de la fonction onToogleFavorite

  onToggleFavorite(title){
    isFavorite()
  }

  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <div className="wrapp-theme">
        <button 
        onClick = {() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}>
          {theme}
        </button>
      </div>
      <FilmList/>
    </div>
  )
}

export default App
