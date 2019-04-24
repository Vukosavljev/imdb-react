import React from 'react';

import './DisplayFavorites.css'

const DisplayFavorites = ({title, actors, released, imdbRating, runtime, genre, poster, imdbID, favorite }) => {

  return (
    <div className="film">
      <h5> {title} </h5>
    </div>
  )
}

export default DisplayFavorites;
