import { useState } from "react";
import FilmList from "./components/FilmList";
import "./index.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}`}>
      <h1>Bonjour Sara</h1>

      <button onClick={toggleTheme} className="theme-btn">
        {theme === "light" ? "Dark mode" : "Light mode"}
      </button>

      <FilmList />
    </div>
  );
}

export default App;