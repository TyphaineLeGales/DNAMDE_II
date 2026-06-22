import './CardList.css';

export default function GenreChip(props) {
  const handleCallback = () => props.setSelectedGenreCallback(props.name)
  
  return (
    <p className="genre-chip" data-selected={props.selected} onClick={handleCallback}>
      {props.name}
    </p>
  )
}