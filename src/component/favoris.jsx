import FilmList from "./filmList.jsx"


function Favoris ({favorites, onToggleFavorite, filmData}){
    const FilmListFavoris = filmData.filter((film) => favorites.includes(film.title))

    return (
    <>
    <FilmList 
    filmData={FilmListFavoris}
    favorites= {favorites}
    onToggleFavorite = {onToggleFavorite}
    />
    </>
)}


export default Favoris