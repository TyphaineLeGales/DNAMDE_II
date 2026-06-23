import "./filters.css";
//import jsonFilm from "./assets/filmData.json?raw";
//const filmData =  JSON.parse(jsonFilm)

function Filters() {

return(

    <div className="filters-container">
        <div className="searchbar">Search a movie <input className="input-field" type="text" /></div>
        <div className="filters-buttons-container">
            <button>All</button>
            <button>Action</button>
            <button>Adventure</button>
            <button>Fantasy</button>
            <button>Drama</button>
            <button>Horror</button>
            <button>Sci-Fi</button>
            <button>Thriller</button>
            <button>Biopic</button>
            <button>Comedy</button>
            <button>Crime</button>
            <button>Hystory</button>


        </div>
    
  </div>

)

}

export default Filters;
