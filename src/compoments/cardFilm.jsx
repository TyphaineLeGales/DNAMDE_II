import "./cardFilm.css";
//JSON LOCAL
// function CardFilm({ film }) {
//     return (
//         <div className="film-card">
//             <img 
//             src={film.Poster.startsWith("https") ? film.Poster : film.Images[0]}
//             />
//         <h2>{film.Title}</h2>
//         <div className="film-note">
//             <p>{film.Year}</p>
//             <p>⭐{film.imdbRating}</p>
//         </div>
//         <p className="film-genre">{film.Genre}</p>
//         <p className="film-resume">{film.Plot}</p>
//         </div>
//     );
// }

function CardFilm({ film }) {
    return (
        <div className="film-card">
            <img 
            src={film.movie_banner.startsWith("https") ? film.movie_banner : film.image}
            />
        <h2>{film.title}</h2>
        <div className="film-note">
            <p>{film.release_date}</p>
            <p>⭐{film.rt_score}</p>
        </div>
        <p className="film-resume">{film.description.slice(0, 150)}...</p>
        </div>
    );
}
export default CardFilm;