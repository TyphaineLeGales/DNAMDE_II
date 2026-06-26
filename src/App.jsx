import { useState } from "react";
import Explore from "./compoments/explore.jsx";
import PageFavorite from "./compoments/favoritePage.jsx";
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
      <BrowserRouter>
      <nav>
        <NavLink to="/explore" end>Explore</NavLink>
        <NavLink to="/favorite" end>Favorite</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Explore/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/favorite" element={<PageFavorite/>}/>
      </Routes>
      </BrowserRouter>
    </header>
    
  </>
      
  )
}

export default App