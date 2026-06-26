function Film(props) {

    return (
        <div className={props.isDarkModeActive ? "film film-dark" : "film"}>
            <div className="movie-poster-container">
                <img className='movie-poster' src={props.data.image} alt="{props.data.title}" />
            </div>
            <div className='movie_infos-container'>
                <h2 className={props.isDarkModeActive ? "text-dark" : ""}>{props.data.title}</h2>
                <div className={props.isDarkModeActive ? "movie-infos text-dark" : "movie-infos"}>
                    <span>{props.data.release_date}</span>
                    <span>{props.data.rt_score}</span>
                </div>
                <p className='movie-director'>{props.data.director}</p>
                <p className={props.isDarkModeActive ? "movie-plot text-dark" : "movie-plot"}>{props.data.description}</p>
            </div>
        </div>
    )
}

export default Film