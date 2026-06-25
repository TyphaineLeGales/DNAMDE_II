function Film(props) {

    return (
        <div className='film'>
            <div className="movie-poster-container">
                <img className='movie-poster' src={props.data.Images[0]} alt="Poster du film" />
            </div>
            <div className='movie_infos-container'>
                <h2>{props.data.Title}</h2>
                <div className='movie-infos'>
                    <span>{props.data.Year}</span>
                    <span>{props.data.imdbRating}</span>
                </div>
                <p className='movie-genre'>{props.data.Genre}</p>
                <p className='movie-plot'>{props.data.Plot}</p>
            </div>
        </div>
    )
}

export default Film