import ListFilm from "./compoments/listFilm.jsx";
import { useState } from "react";

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
      <h1>Hello Louane 🌞</h1>
      <ListFilm/>   
    </div>
  )
}

export default App