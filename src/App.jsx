import Card from "./Card"
import "./app.css"
import jsonFilm from "./assets/filmData.json?raw"




function App() {

const filmsData =  JSON.parse(jsonFilm)
console.log(filmsData)

  return (
    <div className="movies-container">


      {filmsData.map(filmData => ( 
        <Card data={filmData}/>


      ))}

      
    </div>
  )
}

export default App
