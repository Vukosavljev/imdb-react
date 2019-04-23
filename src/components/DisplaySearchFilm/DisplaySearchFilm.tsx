import React from 'react';
import './DisplaySearchFilm.css';
import starBlack from '../../assets/images/star.png'
import starYellow from '../../assets/images/star-yellow.png'

export default function DisplaySearchFilm(props: any) {


  const { Title: title,
    Actors: actors,
    Released: released,
    imdbRating,
    Runtime: runtime, 
    Genre: genre,
    Poster: poster, 
    imdbID,
    Plot: plot,
    favorite } = props.filmDetails;
  

  return (
    <div className="film-container card">

      { props.error ?

      <h5 > I'm sorry the name you asked for <strong>({props.filmTitle})</strong> does not exist, please try again.</h5> :

      <>
        <h4>
          {title}
          <img src={favorite ? starYellow : starBlack} alt="star" className="icon" onClick={props.toggleFavorite} />
        </h4>
        
        <div className="flex">

          <div className="poster-image">
            <a href={poster} target="_blank">
              <img src={poster} alt={title} />
            </a>
          </div>

          <div className="description">
            <p>Actors: {actors}</p>
            <p>Released: {released}</p>
            <p>imdbRating: {imdbRating} <small>/10</small></p>
            <p>Runtime: {runtime}</p>
            <p>Genre: {genre}</p>
            <p className="plot-text">Short Descriptio: {plot}</p>
            <a href={`https://www.imdb.com/title/${imdbID}/`} target="_blank">See full description on imdb</a>
          </div>

        </div>
      </>
      }

    </div>
  )
}
