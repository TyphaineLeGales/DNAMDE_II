import filmData from "../assets/filmData.json"
import Film from "./film.jsx"

// cette  fonction permet d'assigner les valeur de datafilm a la fonction film

function FilmList (){
    return (
        <div className="grid-container">
            {filmData.map((unFilm) => (
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
    )
}

export default FilmList