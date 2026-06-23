//import { useState } from "react"
//import Card from "./Card"
import CardList from "./CardList.jsx"
import Filters from "./Filters.jsx"
import "./app.css"
import jsonFilm from "./assets/filmData.json?raw"




function App() {

 // const[userInput, setUserInput] = useState()
 //const filteredFilms = 

const filmsData =  JSON.parse(jsonFilm)
const filteredFilms = filmsData.filter((film) => film.Title.length > 20)
//console.log(filmsData)

  return (

    <div>
      <Filters/>
      <CardList films={filteredFilms}/>
    </div>
   /* <div className="movies-container">


      {filmsData.map(filmData => ( 
        <Card data={filmData}/>


      ))}

      
    </div>*/
  )
}

export default App
