import React, { Component } from 'react';
import DisplayFavorites from '../DisplayFavorites/DisplayFavorites';
import './Favorite.css'

export default function Favorites ({favorites}) {

    return (
      <div className="FavoriteContainer">
        {
          favorites.length === 0 ?
            <h4>Your list of favorite movies is empty, please add some.</h4> :
            favorites.map(fav => <DisplayFavorites key={fav.imdbID} {...fav} />)
        }
      </div>
    )
}