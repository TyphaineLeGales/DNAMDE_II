import { useState } from "react";
import FilmList from "./FilmList";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Mode clair" : "🌙 Mode sombre"}
      </button>

      <FilmList />
    </div>
  );
}

export default App;