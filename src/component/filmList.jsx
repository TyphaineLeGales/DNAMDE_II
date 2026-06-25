//import filmData from "../assets/filmData.json"
import Film from "./film.jsx"
import { useState, useEffect } from "react" // import pour se souvenir




// cette  fonction permet d'assigner les valeur de datafilm a la fonction film

function FilmList (){
    const [filmData, setFilmData] = useState([])
    const [search, setSearch] = useState("")
    const producerUniques = [...new Set(filmData.map((unFilm) => unFilm.producer.split(",")).flat())]
    //ci dessus cela créer un tableau sans doublon des genre
    const [selectedProducer, setSelectedProducer] = useState("All")
    //fonction pour selectionner le statue des genres


// je sais qu'il faut utiliser suspense mais je n'y arrive vraiment pas. 



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
        { <div className="wrapp-button"> 
            <button onClick={()=> setSelectedProducer("All")}
                className={setSelectedProducer === "All" ? "button-choice selected" : "button-choice"}>All</button>
            {producerUniques.map((unProducer)=> (
                <button key={unProducer}
                onClick={(e)=> setSelectedProducer(unProducer)}
                className={selectedProducer === unProducer ? "button-choice selected" : "button-choice"}
                >{unProducer}
                </button>
            ))}
        </div> }
        <div className="grid-container">
            { filmData.filter((unFilm)=> unFilm.title.toLowerCase().includes(search.toLowerCase()) && (selectedProducer === "All" || unFilm.producer.includes(selectedProducer))
            ).map((unFilm) => (
                <Film 
                key={unFilm.title}
                title={unFilm.title}
                producer={unFilm.producer}
                rt_score={unFilm.rt_score}
                producer= {unFilm.producer}
                description={unFilm.description}
                image={unFilm.image} />

            ))}
        </div>
    </>)
}

export default FilmList