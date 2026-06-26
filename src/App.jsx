import ListFilm from "./compoments/listFilm.jsx";
import { useState } from "react";
import Explore from "./compoments/naviguation.jsx";
import PageFavorite from "./compoments/favoritePage.jsx";
import Naviguation from "./compoments/naviguation.jsx";
// import SqueletteCard from "./compoments/squeletteCard.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div>
      <button onClick={toggleDark} className="mode">
        {darkMode ? "☀️ Mode clair" : "🌙 Mode nuit"}
      </button>
      <Naviguation/>

      <h1>Hello Louane 🌞</h1>
      <ListFilm/>
    </div>
    // <div><SqueletteCard/></div>
  )
}

export default App