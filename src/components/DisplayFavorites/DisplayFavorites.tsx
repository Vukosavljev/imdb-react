import React from 'react';
import { Link } from 'react-router-dom';
import './DisplayFavorites.css'

const DisplayFavorites = ({title, released, imdbRating, poster }) => {

  return (
    <div className="film card">
      <img src={poster} alt={title + " picture"}/>
      <div className="short-desc" >
        <h5> {title} {released.slice(-4)} </h5>
        <p>Rating {imdbRating}</p>
        <div onClick={() => console.log(123)} >
          <Link to="/" >See in more details</Link>
        </div>
      </div>
    </div>
  )
}

export default DisplayFavorites;
