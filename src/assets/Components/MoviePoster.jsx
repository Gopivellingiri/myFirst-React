import React, {useState} from 'react'
import './MoviePoster.css'


const MoviePoster = (props) => {

  const[like, setLike] = useState(0)
  const[Dislike, setDislike] = useState(0)
  const likeHandler = () => {
    setLike(like + 1)
  }
  const disLikeHandler = () => {
    setDislike(Dislike + 1)
  }
return (
      <div className='grid-items'>
          <img className='images' src={props.poster} 
          />
          <div className='content'>
          <div className='head'><h1>{props.name}</h1> <p>⭐{props.rating}</p></div>
          <p>{props.summary}</p>
          <button onClick={likeHandler}>Like {like} 👍</button>
          <button onClick={disLikeHandler}>Dislike {Dislike} 👎</button>
     </div></div>
)
}

export default MoviePoster;