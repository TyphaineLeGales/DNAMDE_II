//import filmData from "../assets/filmData.json"
import Film from "./film.jsx"
import { useState, useEffect } from "react" // import pour se souvenir




// cette  fonction permet d'assigner les valeur de datafilm a la fonction film

function FilmList (){
    const [filmData, setFilmData] = useState([])
    const [search, setSearch] = useState("")
    //const genresUniques = [...new Set(filmData.map((unFilm) => unFilm.Genre.split(",")).flat())]
    //ci dessus cela créer un tableau sans doublon des genre
    //const [selectedGenre, setSelectedGenre] = useState("All")
    //fonction pour selectionner le statue des genres






    useEffect (() => {
    fetch("https://ghibliapi.vercel.app/films/")
        .then((response) => response.json())
        .then((data) => {
       //ici data va être le tableau de film
        setFilmData(data)
    })}, [])


    return (
        <>
        <div className="wrap-search">
            <h2>Search a movie</h2>
            <input
            type="text"
            value={search}
            onChange={(e)=> setSearch(e.target.value)}/>
        </div>
        {/* <div className="wrapp-button"> 
            <button onClick={()=> setSelectedGenre("All")}
                className={selectedGenre === "All" ? "button-choice selected" : "button-choice"}>All</button>
            {genresUniques.map((unGenre)=> (
                <button key={unGenre}
                onClick={(e)=> setSelectedGenre(unGenre)}
                className={selectedGenre === unGenre ? "button-choice selected" : "button-choice"}
                >{unGenre}
                </button>
            ))}
        </div> */}
        <div className="grid-container">
            { filmData.filter((unFilm)=> unFilm.title.toLowerCase().includes(search.toLowerCase()) //&& (selectedGenre === "All" || unFilm.Genre.includes(selectedGenre))
            ).map((unFilm) => (
                <Film 
                key={unFilm.title}
                title={unFilm.title}
                release_date= {unFilm.release_date}
                rt_score={unFilm.rt_score}
                // Genre= {unFilm.Genre}
                description={unFilm.description}
                image={unFilm.image} />

            ))}
        </div>
    </>)
}

export default FilmList