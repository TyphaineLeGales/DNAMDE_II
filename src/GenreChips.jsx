import{ useState } from 'react';
import './filters.css';

export default function GenreChips(props) {
    const [isActive, setIsActive] = useState(false);
    function handleSelected(selectedGenre){

        setIsActive(!isActive);
        console.log(selectedGenre)


        

    }
    return (
    <button  className={isActive ? "active" : ""}  onClick={() => handleSelected(props.genre) }>{props.genre}</button>
      );
}