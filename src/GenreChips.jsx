
import './filters.css';

export default function GenreChips(props) {
    // const [isActive, setIsActive] = useState(false);
    
    // function handleSelected(selectedGenre){

    //     setIsActive(!isActive);
    //     console.log(selectedGenre) }

    function handleClick(){
        props.selection(props.genre)
    }

        

    
    return (
    <button  className={props.selected ? "active" : ""}  onClick={handleClick}>{props.genre}</button>
      );
}