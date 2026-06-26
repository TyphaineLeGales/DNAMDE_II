//on importe les fonctionnalités react que l'on va utiliser plus tard
import { useState } from "react";
import { useEffect } from "react";
//on importe les composants que l'on va utiliser dans ce fichier
import CardList from "./CardList.jsx";
import ColorMode from "./ColorMode.jsx";
import Filters from "./Filters.jsx";
import "./app.css";
//import jsonFilm from "./assets/filmData.json?raw";

const apiUrl = "https://ghibliapi.vercel.app/films/";

function Search() {
  //on comence par set les constantes, en leur disant bien qu'on met des usersates
  const [filmsData, setFilmsData] = useState([]);
  //const filmsData = JSON.parse(jsonFilm);
  const [userInput, setUserInput] = useState("");
  const [activeGenre, setActiveGenre] = useState("All");
  //const [favorite, setFavorite] = useState("All");
  const [colorMode, setColorMode] = useState("light");


//on charge la liste de films à partir de l'api
  useEffect(() => {
    // exécuter la fonction une seule fois
    const fetchFilmsData = async () => {
      const response = await fetch(apiUrl);
      const jsonFilm = await response.json();
      setFilmsData(jsonFilm);
    };
    fetchFilmsData();
  }, []);

  //on s'occupe du mode sombre
  const toggleColorMode = () => {
    setColorMode((currentMode) => (currentMode === "light" ? "dark" : "light"));
  };

//pour update le chargement à chaque fois que l'utilisateur tape un nouveau caractère, et pas quand il y a un event listner (boutton, ou presskey)
  function handleChange(e) {
    setUserInput(e.target.value);
  }
//on définit les fonctions filtrantes (en dehors de leur execution) pour savoir si le film contient les caractere recherchés, ou le genre sélectionné
  const isTitleIsSearch = (film) =>
    film.title.toLowerCase().includes(userInput.toLowerCase());
  const isGenreSelected = (film) => {
    if (activeGenre === "All") {
      return true;
    } else {
      return film.Genre.includes(activeGenre);
    }
  };

//on applique ensuite ces filtres, sur filmdata
  const filteredFilms = filmsData.filter(
    (film) => isTitleIsSearch(film) && isGenreSelected(film)
  );
//partie react, ou on met le html que l'on veut display
  return (
    <div className={colorMode}>
      <div className="color-mode-container">
        {" "}
        <ColorMode //on donne les parametres dont on va avoir besoin, qui vont nous servir dans les composants apres. le nom avant est nouveau, choisi pour le prochain fichier, et le nom après est le nom de ce fichier
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

export default Search;
