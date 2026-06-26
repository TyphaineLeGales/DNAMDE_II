import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch("https://ghibliapi.vercel.app/films")
            .then(res => res.json())
            .then(data => {
                const film = data.find(movie => movie.id === id);
                setMovie(film);
            });
    }, [id]);

    if (!movie) return <h2>Loading...</h2>;

    return (
        <div className="movie-details">

            <img src={movie.image} alt={movie.title} />

            <div>

                <h1>{movie.title}</h1>

                <h3>{movie.release_date}</h3>

                <h3>⭐ {movie.rt_score}/100</h3>

                <p>{movie.description}</p>

            </div>

        </div>
    );
}