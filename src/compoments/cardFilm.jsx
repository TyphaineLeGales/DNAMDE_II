import "./cardFilm.css";

function CardFilm({ film }) {
    return (
        <div className="film-card">
            <img 
            src={film.Poster.startsWith("https") ? film.Poster : film.Images[0]}
            />
        <h2>{film.Title}</h2>
        <div className="film-note">
            <p>{film.Year}</p>
            <p>⭐{film.imdbRating}</p>
        </div>
        <p className="film-genre">{film.Genre}</p>
        <p className="film-resume">{film.Plot}</p>
        </div>
    );
}
export default CardFilm;