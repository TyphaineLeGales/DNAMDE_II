import { useState } from "react";
//import Card from "./Card"
import CardList from "./CardList.jsx";
import Filters from "./Filters.jsx";
import "./app.css";
import jsonFilm from "./assets/filmData.json?raw";

function App() {
  const filmsData = JSON.parse(jsonFilm);
  const [userInput, setUserInput] = useState("");

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  const filteredFilms = filmsData.filter((film) =>
    film.Title.toLowerCase().includes(userInput.toLowerCase())
  );

  //console.log(filmsData)

  return (
    <div>
      <Filters inputChange={handleChange} />
      <CardList films={filteredFilms} />
    </div>
    /* <div className="movies-container">


      {filmsData.map(filmData => ( 
        <Card data={filmData}/>


      ))}

      
    </div>*/
  );
}

export default App;
