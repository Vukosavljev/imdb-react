import React, { Component } from 'react';
import DisplayFavorites from '../DisplayFavorites/DisplayFavorites';


export default class Favorites extends Component <any, any> {


  render() {
    return (
      <div style={{display: 'flex',  flex: '2 1 auto'}}>
        { this.props.favorites.map(f => 
        
         <DisplayFavorites key={f.imdbID} filmDetails={f} /> 
        )}
      </div>
    )
  }
}
