import { useState } from "react";

//import Card from "./Card"
import CardList from "./CardList.jsx";
import ColorMode from "./ColorMode.jsx";
import Filters from "./Filters.jsx";
import "./app.css";
import jsonFilm from "./assets/filmData.json?raw";

function App() {
  const filmsData = JSON.parse(jsonFilm);
  const [userInput, setUserInput] = useState("");
  const [activeGenre, setActiveGenre] = useState("All");
  const [colorMode, setColorMode] = useState("light")


  const toggleColorMode = () => {
    setColorMode((currentMode) => (currentMode === "light" ? "dark" : "light"));
    console.log ("color mode clicked")
  };

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  const isTitleIsSearch = (film) =>
    film.Title.toLowerCase().includes(userInput.toLowerCase());
  const isGenreSelected = (film) => {
    if (activeGenre === "All") {
      return true;
    } else {
      return film.Genre.includes(activeGenre);
    }
  };

  const filteredFilms = filmsData.filter(
    (film) => isTitleIsSearch(film) && isGenreSelected(film)
  );

  return (
    <div>
      <ColorMode colorMode={colorMode} toggleColorMode={toggleColorMode}/>
      <Filters
        inputChange={handleChange}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <CardList films={filteredFilms} />
    </div>
  );
}

export default App;
