import "./card_cinema.css";

function CardCinema({ film }) 


{
    return ( // ma carte cinéma pour modifier dans le css // 
    <div className="cinema-card"> 

    <img className="cinema-image" src={film.movie_banner.startsWith("https") ? film.movie_banner : film.image}/>
    
    <h2 className="cinema-title">{film.title}</h2>

    <p className="cinema-genre">{film.producer}</p>
    
    <div className="cinema-note">
    
    <p className="cinema-date">{film.release_date}</p>
    
    <p className="cinema-rating">★★★★★{film.rt_score}</p>
    
    </div>

        <p className="cinema-resume">{film.description.slice(0, 150)}...</p>
       
        </div>
    );
}



export default CardCinema;