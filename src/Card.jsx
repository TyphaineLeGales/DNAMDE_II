import "./card.css";
import HeartButton from "./HeartButton"
import FavoriteContext from "./FavoriteContext";
import { useContext } from "react";

function Card(props) {
    const {setFavorites, favorites} = useContext(FavoriteContext)
  
   const onBtnClick = () => {
    console.log("clicked")
    
     setFavorites(prev => [...prev, props.data.title])
     console.log(favorites)

   }




  return (
    <div className="card">
      <img src={props.data.image} alt="" className="movie-picture" />
      <HeartButton onClick={onBtnClick}/>
      <h1 className="movie-title"> {props.data.title} </h1>
      <div className="movie-date-rate-container">
        <p className="movie-date">{props.data.release_date}</p>
        <div className="movie-rate">
          <p>⭐ {props.data.rt_score}</p>
        </div>
      </div>
      <p className="movie-genres">{props.data.Genre}</p>
      <p className="movie-synopsis"> {props.data.description}</p>
        <button onClick={onBtnClick}>click</button>
    </div>
  );
}

export default Card;
