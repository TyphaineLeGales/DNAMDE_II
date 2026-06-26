
import { useState } from "react";
import FilmList from "./components/FilmList.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <button onClick={toggleDark} className="mode">
        {darkMode ? "✧ Mode clair ✧" : "✦ Mode nuit ✦"}
      </button>
      <FilmList />
    </div>
  );
}


// ici le mode sombre marche pas //
export default App;
