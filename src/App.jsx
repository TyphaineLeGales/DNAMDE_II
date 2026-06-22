<<<<<<< HEAD
import './App.css'
import FilmDisplay from "./components/FilmDisplay"

function App() {


  return (
    <>
    <FilmDisplay />
    </>
=======
// function App() {
//   return (
//     <div>
//       <h1> Hello 🌞</h1>
      
//     </div>
//   )
// }

// export default App
import FilmList from "./components/FilmList"
import Header from './components/Header'
import { useState } from "react"

function App() {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  
  return (
    <div className={`app ${theme}`}>
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <FilmList theme={theme}/>
    </div>
>>>>>>> 4ff5ae2 (feat: rendered app)
  )
}

export default App
