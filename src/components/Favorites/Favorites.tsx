import React, { Component } from 'react';
import DisplayFavorites from '../DisplayFavorites/DisplayFavorites';


export default class Favorites extends Component <any, any> {


  render() {
    return (
      <div>
        {this.props.favorites.map(f => 
        
         <DisplayFavorites key={f.Title} /> 
        )}
      </div>
    )
  }
}
