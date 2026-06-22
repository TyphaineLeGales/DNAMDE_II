import filmData from "../assets/filmData.json"
import Film from "./film.jsx"
import { useState } from "react" // import pour se souvenir

// cette  fonction permet d'assigner les valeur de datafilm a la fonction film

function FilmList (){
    const [search, setSearch] = useState("")
    const genresUniques = [...new Set(filmData.map((unFilm) => unFilm.Genre.split(",")).flat())]
    //ci dessus cela créer un tableau sans doublon des genre
    const [selectedGenre, setSelectedGenre] = useState("All")
    //fonction pour selectionner le statue des genres
    return (
        <>
        <div>
            <input
            type="text"
            value={search}
            onChange={(e)=> setSearch(e.target.value)}/>
        </div>
        <div> 
            {genresUniques.map((unGenre)=> (
                <button key={unGenre}
                onClick={(e)=> setSelectedGenre(unGenre)}>{unGenre}
                </button>
            ))}
        </div>
        <div className="grid-container">
            {filmData.filter((unFilm)=> unFilm.Title.toLowerCase().includes(search.toLowerCase()) &&  selectedGenre==="All" || unFilm.Genre.includes(selectedGenre)).map((unFilm) => (
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