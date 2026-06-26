import FilmList from "./FilmList";

export default function Search({ favorites, toggleFavorite }) {
    return (
        <FilmList
            favorites={favorites}
            toggleFavorite={toggleFavorite}
        />
    );
}