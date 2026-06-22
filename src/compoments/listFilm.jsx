import { useState } from "react"; 

import CardFilm from "./cardFilm";
import films from "../assets/filmData.json";
import "./listFilm.css";

function ListFilm() {
    const [search, setSearch] = useState(""); 

    const filteredFilms = films.filter((film) =>
        film.Title.toLowerCase().includes(search.toLowerCase())
    );

    return (
    // <div className="film-grid">
    //     {films.map((film, index) => (
    //     <CardFilm key={index} film={film} />
    //     ))}
    // </div>

    <div>
        <input // imput classique pour la barre de recherche
            type="text"
            placeholder="Search a movie"
            value={search}
            onChange={(e) => setSearch(e.target.value)}  // update a chaque lettre tapée
            className="search-input"
        />

        {filteredFilms.length === 0 ? (
            <p>No movies found</p>  // phrase si y'a pas de résultat donc si y'a 0 dans le filtre
        ) : (
            <div className="film-grid"> 
            {/* // filtre donc en gros on fait un map qui affiche que les films qui correspondent à la recherche et retire les autres */}
            {filteredFilms.map((film, index) => (
                <CardFilm key={index} film={film} />
            ))}
            </div>
        )}
    </div>
    );
}

export default ListFilm;