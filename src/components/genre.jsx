function Genre(props){

    return(
        <ul className="genre-container">
            <li className="genre-text" key={Genre.id}>{props.data}</li>
        </ul>
    )
}

export default Genre