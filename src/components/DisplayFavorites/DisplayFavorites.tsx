import React from 'react';
import { Link } from 'react-router-dom';
import IMBdImage from '../../assets/images/IMDb-icon.png'
import './DisplayFavorites.css'

const DisplayFavorites = ({ title, released, imdbRating, poster }) => {

  return (
    <div className="film card">
      <img src={poster} alt={title + " picture"} />
      <div className="short-desc" >
        <h5> {title} <span className="film-year">({released.slice(-4)})</span></h5>
        <p>
          <span className="rating-text" >
            Rating {imdbRating}
          </span>
          <img src={IMBdImage} alt="imdb image" className="imdb-img" />
        </p>
        <Link className="link" onClick={() => console.log(1)} to="/" >See in more details</Link>
      </div>
    </div>
  )
}

export default DisplayFavorites;
