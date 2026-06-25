function Film ({title, producer, rt_score, running_time, description, image}){
    return (
        <div className="film-card">
            <button className="button-fav"> 
                heart
            </button>
            <div>
                <img src={image} alt={title}/>
            </div>
            <h2>
                {title}
            </h2>
            <div className="wrapp-year-rate"> 
                <p>
                    {producer}
                </p>
                <p> 
                ⭐ {rt_score}
                </p>
            </div>
            <h3> 
                {running_time}
            </h3>
            <p>
                {description}
            </p>
        </div>
    )
}

export default Film