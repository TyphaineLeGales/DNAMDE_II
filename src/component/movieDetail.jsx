import { useParams } from "react-router-dom"



function MovieDetail ({filmData}) {
    const { title } = useParams()
    const film = filmData.find((unFilm) => unFilm.title === title)

    if (!film) {
    return <p>404 Not Found</p>
}

return (
        <div className="film-card">
            <img src={film.image} alt={film.title} />
            <h2>{film.title}</h2>
            <div className="wrapp-year-rate">
                <p>{film.producer}</p>
                <p>⭐ {film.rt_score}</p>
            </div>
            <h3>{film.running_time} min</h3>
            <p>{film.description}</p>
        </div>
    )


}

export default MovieDetail