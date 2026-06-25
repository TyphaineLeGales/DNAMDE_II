function Genre(props){

    return(
        <button onClick={() => props.setSelectedGenre(props.name)} className={props.name === props.selectedGenre ? "genre-container active" : "genre-container"}>
            <p className="genre-text">{props.name}</p>
        </button>
    )
}

export default Genre