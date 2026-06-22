import FilmList from "./component/filmList.jsx"
import { useState } from "react"
function App() {
  const [theme, setTheme] = useState("light")
  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <div >
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
