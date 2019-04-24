import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Search from '../components/Search/Search';
import DisplaySearchFilm from '../components/DisplaySearchFilm/DisplaySearchFilm';
import Favorites from '../components/Favorites/Favorites';
import { FilmModel } from '../FilmModel';

import { Route } from 'react-router-dom';


interface State {
    film: FilmModel, 
    filmTitle: string,
    error: boolean,
    favorites: Array<FilmModel>
}

export default class MovieApp extends Component {
    state: State = {
        //set '' below
        filmTitle: 'a',
        film: 
            {title: "Venom", year: "2018", rated: "PG-13", released: "05 Oct 2018",
            runtime: "112 min", genre:"Action, Sci-Fi",actors: "Tom Hardy, Michelle Williams, Riz Ahmed, Scott Haze",
            plot: "A failed reporter is bonded to an alien entity, one of many entities who have invaded Earth. But the entity takes a liking to Earth and decides to protect it.",
            poster: "https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_SX300.jpg",
            imdbRating:"6.8", imdbID:"tt1270797",response:"True"},
        error: false,
        
        favorites: [
            {title:"Rocky",year:"1976",rated:"PG",released:"03 Dec 1976",
            runtime:"120 min",genre:"Drama, Sport",
            actors:"Sylvester Stallone, Talia Shire, Burt Young, Carl Weathers",
            plot:"A small-time boxer gets a supremely rare chance to fight a heavy-weight champion in a bout in which he strives to go the distance for his self-respect.",
            poster:"https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_SX300.jpg",
            imdbRating:"8.1", imdbID:"tt0075148",response:"True"},
            {title: "Venom", year: "2018", rated: "PG-13", released: "05 Oct 2018",
            runtime: "112 min", genre:"Action, Sci-Fi",actors: "Tom Hardy, Michelle Williams, Riz Ahmed, Scott Haze",
            plot: "A failed reporter is bonded to an alien entity, one of many entities who have invaded Earth. But the entity takes a liking to Earth and decides to protect it.",
            poster: "https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_SX300.jpg",
            imdbRating:"6.8", imdbID:"tt1270797",response:"True"},
            {title:"Rocky",year:"1976",rated:"PG",released:"03 Dec 1976",
            runtime:"120 min",genre:"Drama, Sport",
            actors:"Sylvester Stallone, Talia Shire, Burt Young, Carl Weathers",
            plot:"A small-time boxer gets a supremely rare chance to fight a heavy-weight champion in a bout in which he strives to go the distance for his self-respect.",
            poster:"https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_SX300.jpg",
            imdbRating:"8.1", imdbID:"tt0075148",response:"True"},
            {title: "Venom", year: "2018", rated: "PG-13", released: "05 Oct 2018",
            runtime: "112 min", genre:"Action, Sci-Fi",actors: "Tom Hardy, Michelle Williams, Riz Ahmed, Scott Haze",
            plot: "A failed reporter is bonded to an alien entity, one of many entities who have invaded Earth. But the entity takes a liking to Earth and decides to protect it.",
            poster: "https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_SX300.jpg",
            imdbRating:"6.8", imdbID:"tt1270797",response:"True"},
            {title:"Rocky",year:"1976",rated:"PG",released:"03 Dec 1976",
            runtime:"120 min",genre:"Drama, Sport",
            actors:"Sylvester Stallone, Talia Shire, Burt Young, Carl Weathers",
            plot:"A small-time boxer gets a supremely rare chance to fight a heavy-weight champion in a bout in which he strives to go the distance for his self-respect.",
            poster:"https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_SX300.jpg",
            imdbRating:"8.1", imdbID:"tt0075148",response:"True"},
            {title: "Venom", year: "2018", rated: "PG-13", released: "05 Oct 2018",
            runtime: "112 min", genre:"Action, Sci-Fi",actors: "Tom Hardy, Michelle Williams, Riz Ahmed, Scott Haze",
            plot: "A failed reporter is bonded to an alien entity, one of many entities who have invaded Earth. But the entity takes a liking to Earth and decides to protect it.",
            poster: "https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_SX300.jpg",
            imdbRating:"6.8", imdbID:"tt1270797",response:"True"},
            {title:"Rocky",year:"1976",rated:"PG",released:"03 Dec 1976",
            runtime:"120 min",genre:"Drama, Sport",
            actors:"Sylvester Stallone, Talia Shire, Burt Young, Carl Weathers",
            plot:"A small-time boxer gets a supremely rare chance to fight a heavy-weight champion in a bout in which he strives to go the distance for his self-respect.",
            poster:"https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_SX300.jpg",
            imdbRating:"8.1", imdbID:"tt0075148",response:"True"},
            {title: "Venom", year: "2018", rated: "PG-13", released: "05 Oct 2018",
            runtime: "112 min", genre:"Action, Sci-Fi",actors: "Tom Hardy, Michelle Williams, Riz Ahmed, Scott Haze",
            plot: "A failed reporter is bonded to an alien entity, one of many entities who have invaded Earth. But the entity takes a liking to Earth and decides to protect it.",
            poster: "https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_SX300.jpg",
            imdbRating:"6.8", imdbID:"tt1270797",response:"True"},
            {title: "Venom", year: "2018", rated: "PG-13", released: "05 Oct 2018",
            runtime: "112 min", genre:"Action, Sci-Fi",actors: "Tom Hardy, Michelle Williams, Riz Ahmed, Scott Haze",
            plot: "A failed reporter is bonded to an alien entity, one of many entities who have invaded Earth. But the entity takes a liking to Earth and decides to protect it.",
            poster: "https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_SX300.jpg",
            imdbRating:"6.8", imdbID:"tt1270797",response:"True"},
        ]
    }


    // reaching API
    fetchFilm = (event: React.ChangeEvent<HTMLInputElement>, film: string): void => {
        event.preventDefault();
        if (film && film !== this.state.filmTitle) {
            this.setState({ filmTitle: film });
            fetch(`http://www.omdbapi.com/?apikey=7852d187&t=${film}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.Response === 'False') {
                    this.setState({ error: true })
                } else {
                    //call function for setting state
                   this.settingState(data)
                }
            });
        }
    }


    // set state
    settingState = fetchedData => {
        //destructure response from server
        const { Title: title,
            Actors: actors,
            Released: released,
            imdbRating,
            Runtime: runtime, 
            Genre: genre,
            Poster: poster, 
            imdbID,
            Plot: plot,
            } = fetchedData

        // setting state with destructured variables
        this.setState({ film: {
            title,
            actors,
            released,
            imdbRating,
            runtime,
            genre,
            poster,
            imdbID,
            plot,
            favorites: false,
        }, error: false })

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
        const filmList = this.state.favorites.filter(movie => movie.title !== favMovie.title)
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
                }/>

                <Route path="/favorites" render={() => 
                    <Favorites favorites={this.state.favorites} />
                }/>

                <Footer />

            </>
        )
    }
}

