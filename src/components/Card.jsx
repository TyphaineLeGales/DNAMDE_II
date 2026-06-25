import { useState } from 'react'
import LikeButton from './Like'
import './Card.css'
import { getStorage, setStorage, safeInitialisation } from '../utils/storage'

export default function Card(props) {
  const cardID = props.data.id;
  safeInitialisation(cardID);

  const [isLiked, setIsLiked] = useState(getStorage(cardID).isLiked)

  const setLike = (like) => {
    setIsLiked(like);
    setStorage(cardID, {
      isLiked: like
    })
  }

  return (
    <div className="card">
      {/* <picture className="movie-poster">
        <source srcset={props.data.Images[0]} alt="Poster"/>
        <source srcset="placeholder.webp" alt="Poster"/>
        <img src="placeholder.webp" alt="" />
        
      </picture> */}
      <img className="movie-poster" src={props.data.image ?? "placeholder.webp"} alt="Poster"/>
      <div className="movie-data">
        <div className='top-actions'>
          <p className="movie-title">{props.data.title}</p>
          <LikeButton isLiked={isLiked} setIsLiked={setLike}/>
        </div>
        <div className="movie-infos">
          <span>{props.data.release_date}</span>
          <span>★ {props.data.rt_score}</span>
        </div>
        <p className="movie-genres">{props.data.producer}</p>
        <p className="movie-desc">{props.data.description}</p>
      </div>
    </div>
  )
}