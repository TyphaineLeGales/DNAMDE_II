import filmData from "../assets/filmData.json"
import Film from "./film.jsx"
import { useState } from "react" // import pour se souvenir

// cette  fonction permet d'assigner les valeur de datafilm a la fonction film

function FilmList (){
    const [search, setSearch] = useState("")
    return (
        <>
        <div>
            <input
            type="text"
            value={search}
            onChange={(e)=> setSearch(e.target.value)}/>
        </div>
        <div className="grid-container">
            {filmData.filter((unFilm)=> unFilm.Title.toLowerCase().includes(search.toLowerCase())).map((unFilm) => (
                <Film 
                key={unFilm.Title}
                Title={unFilm.Title}
                Year= {unFilm.Year}
                imbRating={unFilm.imdbRating}
                Genre= {unFilm.Genre}
                Plot={unFilm.Plot}
                Images={unFilm.Images} />

            ))}
        </div>
    </>)
}

export default FilmList