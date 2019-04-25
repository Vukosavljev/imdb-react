import React, { Component } from 'react';
import DisplayFavorites from '../DisplayFavorites/DisplayFavorites';
import './Favorite.css'

export default function Favorites({ favoriteMovies, setMovieFocus }) {

  return (
    <div className="FavoriteContainer">

      {
        favoriteMovies.length === 0 ?
          <h4>Your list of favorite movies is empty, please add some.</h4> :
          favoriteMovies.map(fav =>
            <DisplayFavorites key={fav.imdbID} setMovieFocus={setMovieFocus} favorMovie={fav} />)
      }
    </div>
  )
}