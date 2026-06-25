import "./filters.css";
import GenreChips from "./GenreChips";
import jsonFilm from "./assets/filmData.json";
//const filmData =  JSON.parse(jsonFilm)

function Filters(props) {

    function handleSelected(id){
        
        console.log(id)
        

    }
console.log("jsonFilm", jsonFilm)


const genres = jsonFilm.flatMap((film)=> film.Genre.split(",")) //map c'est une fonction qui pour tout les 
// flatMap permet d'enlever une couche de tableau, si on a un tableau dans un tableau
// split s'appele sur une chaine de caractere et prends en parametre là ou on veut couper

console.log("genres", genres)

const chips = [...new Set(genres)] //permet de ne garder qu'une seule ittération par genre


console.log("chips",chips)


return(

    <div className="filters-container">
        <div className="searchbar">Search a movie <input name="inputField" className="input-field" type="text" onChange={props.inputChange} /></div>
        <div className="filters-buttons-container">

        {chips.map(genre => <GenreChips genre={genre}/>)} 



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
