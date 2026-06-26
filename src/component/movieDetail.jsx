import { useParams } from "react-router-dom"



function MovieDetail ({filmData}) {
    const { title } = useParams()
    const film = filmData.find((unFilm) => unFilm.title === title)

}

export default MovieDetail