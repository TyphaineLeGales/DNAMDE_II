import { useState } from "react";
import { useEffect } from "react";
//import Card from "./Card"
import CardList from "./CardList.jsx";
import ColorMode from "./ColorMode.jsx";
import Filters from "./Filters.jsx";
import "./app.css";
//import jsonFilm from "./assets/filmData.json?raw";

const apiUrl = "https://ghibliapi.vercel.app/films/";

function App() {
  const [filmsData, setFilmsData] = useState([]);
  //const filmsData = JSON.parse(jsonFilm);
  const [userInput, setUserInput] = useState("");
  const [activeGenre, setActiveGenre] = useState("All");
  const [colorMode, setColorMode] = useState("light");

  //const [films, setFilms] = useState([]);

  useEffect(() => {
    // exécuter la fonction une seule fois
    const fetchFilmsData = async () => {
      const response = await fetch(apiUrl);
      const jsonFilm = await response.json();
      setFilmsData(jsonFilm);
    };
    fetchFilmsData();
  }, []);

  const toggleColorMode = () => {
    setColorMode((currentMode) => (currentMode === "light" ? "dark" : "light"));
  };

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  const isTitleIsSearch = (film) =>
    film.title.toLowerCase().includes(userInput.toLowerCase());
  const isGenreSelected = (film) => {
    if (activeGenre === "All") {
      return true;
    } else {
      return film.Genre.includes(activeGenre);
    }
  };
  //console.log(filmsData);

  const filteredFilms = filmsData.filter(
    (film) => isTitleIsSearch(film) && isGenreSelected(film)
  );

  return (
    <div className={colorMode}>
      <div className="color-mode-container">
        {" "}
        <ColorMode
          colorMode={colorMode}
          toggleColorMode={toggleColorMode}
        />{" "}
      </div>
      <div>
        <Filters
          inputChange={handleChange}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
        <CardList films={filteredFilms} />
      </div>
    </div>
  );
}

export default App;
