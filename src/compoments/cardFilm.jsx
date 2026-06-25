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
            <div className="film-image-container">
                <img
                    src={film.movie_banner}
                    alt={film.title}
                    onError={(e) => e.target.src = film.image}
                />
                <button className="like-btn">♡</button>
            </div>
            <div className="film-info">
                <h2>{film.title}</h2>
                <div className="film-meta">
                    <span>{film.release_date}</span>
                    <span>⭐ {film.rt_score}</span>
                </div>
                <p className="film-genre">{film.producer}</p>
                <p className="film-plot">{film.description.slice(0, 150)}...</p>
            </div>
        </div>
    );
}

export default CardFilm;