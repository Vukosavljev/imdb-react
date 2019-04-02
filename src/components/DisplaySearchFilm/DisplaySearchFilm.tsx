import React from 'react';
import './DisplaySearchFilm.css';

export default function DisplaySearchFilm(props: any) {


  const { Title, Actors, Released, imdbRating, Runtime, Genre, Poster, imdbID } = props.filmDetails;

  return (
    <div className="film-container">

      <h4>{Title}</h4>
      <div className="flex">

        <img className="poster-image" src={Poster} alt={Title} />
        <div className="description">

          <p>Actors: {Actors}</p>
          <p>Released: {Released}</p>
          <p>imdbRating: {imdbRating} <small>/10</small></p>
          <p>Runtime: {Runtime}</p>
          <p>Genre: {Genre}</p>
          <a href={`https://www.imdb.com/title/${imdbID}/`} target="_blank">See full description on imdb</a>
          
        </div>

      </div>

    </div>
  )
}
