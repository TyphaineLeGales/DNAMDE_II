import "./card.css"

function Card() {


    return (
      <div>
        <img src="photo.png" alt="" class = "movie-picture"/>
        <h1 class = "movie-title"> titre film </h1>
        <div>
            <p class = "movie-date">Date</p>
            <div><p>⭐</p><p>Rate</p></div>
        </div>
        <p class = "movie-genres">genres</p>
        <p class = "movie-synopsis"> synopsis</p>
      </div>
    )
  }
  
  export default Card
  