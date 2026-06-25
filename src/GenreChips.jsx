import './filters.css';

export default function GenreChips(props) {
    function handleSelected(id){
        
        console.log(id)
        

    }
    return (
    <button onClick={() => handleSelected('selection')}>{props.genre}</button>
      );
}