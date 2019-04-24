import React, { Component } from 'react';
import DisplayFavorites from '../DisplayFavorites/DisplayFavorites';


export default function Favorites ({favorites}) {

    return (
      <div style={{ display: 'flex', flex: '2 1 auto' }}>
        {
          favorites.length === 0 ?
            <h3>Your list of favorite movies is empty, please add some.</h3> :
            favorites.map(f => <DisplayFavorites key={f.imdbID} {...f} />)
        }
      </div>
    )
}
