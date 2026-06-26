import { useParams } from "react-router-dom"



function MovieDetail ({filmData}) {
    const { title } = useParams()
    const film = filmData.find((unFilm) => unFilm.title === title)

    if (!film) {
    return <p>404 Not Found</p>
}

}

export default MovieDetail