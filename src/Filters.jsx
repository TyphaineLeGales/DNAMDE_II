import "./filters.css";
//import GenreChips from "./GenreChips";
import jsonFilm from "./assets/filmData.json?raw";
//const filmData =  JSON.parse(jsonFilm)

function Filters(props) {

    function handleSelected(id){
        
        console.log(id)
        

    }

const genres = jsonFilm.map((film)=> film.Genre)

console.log(jsonFilm)
//console.log(genres)





return(

    <div className="filters-container">
        <div className="searchbar">Search a movie <input name="inputField" className="input-field" type="text" onChange={props.inputChange} /></div>
        <div className="filters-buttons-container">

        {/* <GenreChips inputChange={handleChange} /> */}



            <button onClick={() => handleSelected('all')} >All</button>
            <button onClick={() => handleSelected('Action')}>Action</button>
            <button onClick={() => handleSelected('Adventure')}>Adventure</button>
            <button onClick={() => handleSelected('Fantasy')}>Fantasy</button>
            <button onClick={() => handleSelected('Drama')}>Drama</button>
            <button onClick={() => handleSelected('Horror')}>Horror</button>
            <button onClick={() => handleSelected('Sci-Fi')}>Sci-Fi</button>
            <button onClick={() => handleSelected('Thriller')}>Thriller</button>
            <button onClick={() => handleSelected('Biopic')}>Biopic</button>
            <button onClick={() => handleSelected('Comedy')}>Comedy</button>
            <button onClick={() => handleSelected('Crime')}>Crime</button>
            <button onClick={() => handleSelected('History')}>Hystory</button>


        </div>
    
  </div>

)

}

export default Filters;
