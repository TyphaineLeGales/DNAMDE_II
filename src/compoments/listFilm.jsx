import { useState } from "react"; 

import CardFilm from "./cardFilm";
import films from "../assets/filmData.json";
import "./listFilm.css";


const allGenres = ["All", ...new Set(films.flatMap((film) => film.Genre.split(", ")))]; // J'ai chercher la fameuse méthode de tableau unique set

function ListFilm() {
    const [search, setSearch] = useState(""); 
    const [selectedGenre, setSelectedGenre] = useState("All"); // genre sélectionné

    const filteredFilms = films.filter((film) => {
        const matchSearch = film.Title.toLowerCase().includes(search.toLowerCase());
        const matchGenre = selectedGenre === "All" || film.Genre.includes(selectedGenre);
        return matchSearch && matchGenre; // les deux filtres en même temps
    });

    return (
    <div>
        <input // imput classique pour la barre de recherche
            type="text"
            placeholder="Search a movie"
            value={search}
            onChange={(e) => setSearch(e.target.value)}  // update a chaque lettre tapée
            className="recherche"
        />

        {/* Boutons de genre */}
        <div className="genre-filters">
            {allGenres.map((genre) => (
                <button
                    key={genre}
                    className={selectedGenre === genre ? "active" : ""}
                    onClick={() => setSelectedGenre(genre)}
                >
                    {genre}
                </button>
            ))}
        </div>

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