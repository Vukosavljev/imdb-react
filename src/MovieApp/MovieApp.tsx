import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Search from '../components/Search/Search';
import DisplaySearchFilm from '../components/DisplaySearchFilm/DisplaySearchFilm';
import Favorites from '../components/Favorites/Favorites';

import { Route, Link } from 'react-router-dom';
import './MovieApp.css';

interface State {
    film: any, 
    filmTitle: string,
    error: boolean,
    favorites: Array<any>
}

export default class MovieApp extends Component {
    state: State = {
        //set '' below
        filmTitle: 'a',
        film: 
            {Title: "Venom", Year: "2018", Rated: "PG-13", Released: "05 Oct 2018",
            Runtime: "112 min", Genre:"Action, Sci-Fi", Director: "Ruben Fleischer",
            Writer: "Jeff Pinkner (screenplay by), Scott Rosenberg (screenplay by), Kelly Marcel (screenplay by), Jeff Pinkner (screen story by), Scott Rosenberg (screen story by), Todd McFarlane (Marvel's Venom Character created by), David Michelinie (Marvel's Venom Character created by)",
            Actors: "Tom Hardy, Michelle Williams, Riz Ahmed, Scott Haze",
            Plot: "A failed reporter is bonded to an alien entity, one of many entities who have invaded Earth. But the entity takes a liking to Earth and decides to protect it.",
            Language: "English", Country: "China, USA", Awards: "N/A",
            Poster: "https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_SX300.jpg",
            Ratings: [
                {Source: "Internet Movie Database", Value: "6.8/10"},
                {Source: "Metacritic", Value: "35/100"}
            ],
            Metascore:"35", imdbRating:"6.8", imdbVotes: "231,324", imdbID:"tt1270797",
            Type: "movie", DVD:"18 Jun 2013", BoxOffice: "N/A", Production:"Vis",
            Website:"N/A", Response:"True"
        },
        error: false,
        
        favorites: [
        {Title:"Rocky",Year:"1976",Rated:"PG",Released:"03 Dec 1976",Runtime:"120 min",Genre:"Drama, Sport",
        Director:"John G. Avildsen",Writer:"Sylvester Stallone",Actors:"Sylvester Stallone, Talia Shire, Burt Young, Carl Weathers",
        Plot:"A small-time boxer gets a supremely rare chance to fight a heavy-weight champion in a bout in which he strives to go the distance for his self-respect.",
        Language:"English",Country:"USA",Awards:"Won 3 Oscars. Another 17 wins & 21 nominations.",
        Poster:"https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_SX300.jpg",
        Ratings:[{Source:"Internet Movie Database",Value:"8.1/10"},{Source:"Rotten Tomatoes",Value:"93%"},{Source:"Metacritic",Value:"70/100"}],
        Metascore:"70",imdbRating:"8.1",imdbVotes:"465,421",imdbID:"tt0075148",Type:"movie",DVD:"07 Aug 2006",
        BoxOffice:"N/A",Production:"United Artists",Website:"http://rockythemovie.com/",Response:"True"},
        {Title: "Venom", Year: "2018", Rated: "PG-13", Released: "05 Oct 2018",
            Runtime: "112 min", Genre:"Action, Sci-Fi", Director: "Ruben Fleischer",
            Writer: `Jeff Pinkner (screenplay by), Scott Rosenberg (screenplay by), Kelly Marcel (screenplay by), Jeff Pinkner (screen story by), Scott Rosenberg (screen story by),
            Todd McFarlane (Marvel's Venom Character created by), David Michelinie (Marvel's Venom Character created by)`,
            Actors: "Tom Hardy, Michelle Williams, Riz Ahmed, Scott Haze",
            Plot: "A failed reporter is bonded to an alien entity, one of many entities who have invaded Earth. But the entity takes a liking to Earth and decides to protect it.",
            Language: "English", Country: "China, USA", Awards: "N/A",
            Poster: "https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_SX300.jpg",
            Ratings: [
                {Source: "Internet Movie Database", Value: "6.8/10"},
                {Source: "Metacritic", Value: "35/100"}
            ],
            Metascore:"35", imdbRating:"6.8", imdbVotes: "231,324", imdbID:"tt1270797",
            Type: "movie", DVD:"18 Jun 2013", BoxOffice: "N/A", Production:"Vis",
            Website:"N/A", Response:"True"
        },
        {Title:"Rocky",Year:"1976",Rated:"PG",Released:"03 Dec 1976",Runtime:"120 min",Genre:"Drama, Sport",
        Director:"John G. Avildsen",Writer:"Sylvester Stallone",Actors:"Sylvester Stallone, Talia Shire, Burt Young, Carl Weathers",
        Plot:"A small-time boxer gets a supremely rare chance to fight a heavy-weight champion in a bout in which he strives to go the distance for his self-respect.",
        Language:"English",Country:"USA",Awards:"Won 3 Oscars. Another 17 wins & 21 nominations.",
        Poster:"https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_SX300.jpg",
        Ratings:[{Source:"Internet Movie Database",Value:"8.1/10"},{Source:"Rotten Tomatoes",Value:"93%"},{Source:"Metacritic",Value:"70/100"}],
        Metascore:"70",imdbRating:"8.1",imdbVotes:"465,421",imdbID:"tt007",Type:"movie",DVD:"07 Aug 2006",
        BoxOffice:"N/A",Production:"United Artists",Website:"http://rockythemovie.com/",Response:"True"}
        ]
    }

    fetchFilm = (event: React.ChangeEvent<HTMLInputElement>, film: string): void => {
        event.preventDefault();
        // if (film && film !== this.state.filmTitle) {
        //     this.setState({ filmTitle: film });
        //     fetch(`http://www.omdbapi.com/?apikey=7852d187&t=${film}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.Response === 'False') {
        //             this.setState({ error: true })
        //         } else {
        //             this.setState({ film: data, error: false })
        //         }
        //     });
            
        // }
    }

    toggleFavorite = () => {
        const favoriteMovie = this.state.film;
        //switch the state in film  and  call appropriate function
        favoriteMovie.favorite ?

        (favoriteMovie.favorite = false,
        this.removeFavorite(favoriteMovie)) :

        (favoriteMovie.favorite = true,
        this.addFavorite(favoriteMovie));

        // adding new object film with new property --favorite
        this.setState({ film: favoriteMovie })
    }

    addFavorite = favMovie => {
        this.setState({ favorites: [...this.state.favorites, favMovie] })
    }

    removeFavorite = favMovie => {
        const filmList = this.state.favorites.filter(movie => movie.Title !== favMovie.Title)
        this.setState({ favorites: filmList })
    }


    render() {
        return (
            <>
                <Header />
                
                <Route exact path="/" render={ () => (
                    <div className="row app-container">

                        <Search sumbitFilm={this.fetchFilm} />

                        { this.state.filmTitle ? 
                        <DisplaySearchFilm filmDetails={this.state.film}
                        error={this.state.error}
                        filmTitle={this.state.filmTitle}
                        toggleFavorite={this.toggleFavorite} /> : null }

                    </div>)
                } />

                <Footer />

                <Favorites favorites={this.state.favorites} />
            </>
        )
    }
}

