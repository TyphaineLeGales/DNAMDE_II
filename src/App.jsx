import ListFilm from "./compoments/listFilm.jsx";
import { useState } from "react";
import Explore from "./compoments/naviguation.jsx";
import PageFavorite from "./compoments/favoritePage.jsx";
import Naviguation from "./compoments/naviguation.jsx";
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { NavLink } from "react-router";
// import SqueletteCard from "./compoments/squeletteCard.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
  <>
    <header>
      <button onClick={toggleDark} className="mode">
        {darkMode ? "☀️ Mode clair" : "🌙 Mode nuit"}
      </button>
    </header>
      <BrowserRouter>
      <Routes>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/favorite" element={<PageFavorite/>}/>
      </Routes>
    </BrowserRouter>
  </>
      
  )
}

export default App