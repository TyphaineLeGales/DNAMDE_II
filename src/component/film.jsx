function Film ({Title, Year, imbRating, Genre, Plot, Images}){
    return (
        <div className="film-card">
            <div>
                <img src={Images[0]} alt={Title}/>
            </div>
            <h2>
                {Title}
            </h2>
            <div className="wrapp-year-rate"> 
                <p>
                    {Year}
                </p>
                <p> 
                ⭐ {imbRating}
                </p>
            </div>
            <h3> 
                {Genre}
            </h3>
            <p>
                {Plot}
            </p>
        </div>
    )
}

export default Film