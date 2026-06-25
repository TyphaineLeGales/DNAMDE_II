import "./filters.css";
import GenreChips from "./GenreChips";
import jsonFilm from "./assets/filmData.json";

//const filmData =  JSON.parse(jsonFilm)

function Filters(props) {


  const genres = jsonFilm.flatMap((film) => film.Genre.split(", ")); //map c'est une fonction qui pour tout les
  // flatMap permet d'enlever une couche de tableau, si on a un tableau dans un tableau
  // split s'appele sur une chaine de caractere et prends en parametre là ou on veut couper

  const chips = [...new Set(genres)]; //permet de ne garder qu'une seule ittération par genre



  function handleSelected(selectedGenre) {
    props.setActiveGenre(selectedGenre);
    console.log(selectedGenre);
  }

  return (
    <div className="filters-container">
      <div className="searchbar">
        Search a movie{" "}
        <input
          name="inputField"
          className="input-field"
          type="text"
          onChange={props.inputChange}
        />
      </div>
      <div className="filters-buttons-container">
        {chips.map((genre) => (
          <GenreChips
            genre={genre}
            selection={handleSelected}
            selected={genre === props.activeGenre}
          />
        ))}
      </div>
    </div>
  );
}

export default Filters;
