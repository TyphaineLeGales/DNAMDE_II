// Les Imports //
import { useState, useEffect, useCallback } from "react";
import CardCinema from "./card_cinema";
import PosterCard from "./posterCard";

// les composants FilmList //
function FilmList() {
    const [films, setFilms] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("All");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Récupération des données grâce à l'API //
    useEffect(() => {
        const fetchFilms = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://ghibliapi.vercel.app/films/");
                if (!response.ok) {
                    throw new Error("Échec de la connexion à l'API");
                }
                const data = await response.json();
                setFilms(data);
                setError(null);
            } catch (err) {
                setError("Impossible de charger les films. Veuillez réessayer plus tard.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchFilms();
    }, []);

    // au cas ou un  chargement //
    if (loading) {
        return (
            <div className="film-grid" role="status" aria-live="polite">
                <p className="loading-text">Chargement des films en cours... ^^</p>
                {/* pour faire bo */}
                {[1, 2, 3, 4, 5, 6].map((n) => (
                    <PosterCard key={n} key={n} loading={true} />
                ))}
            </div>
        );
    }


    if (error) {
        return (
            <div className="error-container">
                <p>{error}</p>
                <button onClick={() => window.location.reload()} className="retry-button">
                    Réessayer
                </button>
            </div>
        );
    }

    const allGenres = ["All", ...new Set(
        films
            .flatMap((film) => film.producer ? film.producer.split(", ") : [])
            .map((p) => p.trim())
            .filter((p) => p)
    )];

    // LES FILTRES DU FILM ICI // 
    const filteredFilms = films.filter((film) => {
        const matchSearch = film.title.toLowerCase().includes(search.toLowerCase());
        const matchGenre = selectedGenre === "All" || 
            (film.producer && film.producer.includes(selectedGenre));
        return matchSearch && matchGenre;
    });




// MES BOUTONS DE RECHERCHE / REINTIALISATION ET FILTRES //
    return (
        <div className="film-list-container">
            <header className="film-header">
                <input
                    type="text"
                    placeholder="Rechercher un film..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="recherche"
                    aria-label="Rechercher un film"
                />

                <div className="genre-filters" role="group" aria-label="Filtres par producteur">
                    {allGenres.map((genre) => (
                        <button
                            key={genre}
                            className={`genre-btn ${selectedGenre === genre ? "active" : ""}`}
                            onClick={() => setSelectedGenre(genre)}
                            aria-pressed={selectedGenre === genre}
                        >
                            {genre}
                        </button>
                    ))}
                </div>
            </header>

            {filteredFilms.length === 0 ? (
                <div className="no-results">
                    <p>Aucun film ne correspond à ta recherche.. :/</p>
                    <button 
                        onClick={() => { setSearch(""); setSelectedGenre("All"); }} // reinitialisation des filtres //  
                        className="reset"> Réinitialiser les filtres ? </button>
                </div>
            ) : (
                <div className="film-grid" role="list">
                    {filteredFilms.map((film, index) => (
                        <CardCinema 
                            key={film.id} 
                            film={film} 
                            index={index}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

// LOGIQUEMENT tt est bon, TOUCHE PAS ICI //
// si g un doute faur regarder ton code api sur les chats  //
export default FilmList;