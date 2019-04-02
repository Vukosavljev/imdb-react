import React from 'react';
import './DisplaySearchFilm.css';
import starBlack from '../../assets/images/star.png'
import starYellow from '../../assets/images/star-yellow.png'

export default function DisplaySearchFilm(props: any) {


  const { Title, Actors, Released, imdbRating, Runtime, Genre, Poster, imdbID } = props.filmDetails;
  

  return (
    <div className="film-container">

      { props.error ?

      <h5> I'm sorry the name you asked for <strong>({props.filmTitle})</strong> does not exist, please try again.</h5> :

      <>
        <h4>{Title}
        {/* <img src={starBlack} alt="star" className="icon" /> */}
        <img src={starYellow} alt="star" className="icon" />
        </h4>
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
      </>
      }

    </div>
  )
}
