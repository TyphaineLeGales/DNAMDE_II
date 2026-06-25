import { useState, useEffect } from "react";
import CardFilm from "./cardFilm";
import "./listFilm.css";
import SqueletteCard from "./squeletteCard";

function ListFilm() {
    const [films, setFilms] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("All");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://ghibliapi.vercel.app/films/")
            .then((response) => response.json())
            .then((data) => {
                setFilms(data);
                setLoading(false); 
            });
    }, []);

    if (loading) {
        return (
            <div className="film-grid">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                    <SqueletteCard key={n} />  
                ))}
            </div>
        );
    }
    const allGenres = ["All", ...new Set(films.flatMap((film) => film.producer.split(", ")))];

    const filteredFilms = films.filter((film) => {
        const matchSearch = film.title.toLowerCase().includes(search.toLowerCase());
        const matchGenre = selectedGenre === "All" || film.producer.includes(selectedGenre);
        return matchSearch && matchGenre;
    });

    return (
        <div>
            <input
                type="text"
                placeholder="Search a movie"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="recherche"
            />

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
                <p>No movies found</p>
            ) : (
                <div className="film-grid">
                    {filteredFilms.map((film, index) => (
                        <CardFilm key={index} film={film} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default ListFilm;