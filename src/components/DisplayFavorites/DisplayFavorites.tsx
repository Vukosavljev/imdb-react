import React from 'react'

export default function DisplayFavorites(props) {

    const { Title, Actors, Released, imdbRating, Runtime, Genre, Poster, imdbID, favorite } = props.filmDetails;

  return (
    <div className="film">
      <h5> {Title} </h5>
    </div>
  )
}
