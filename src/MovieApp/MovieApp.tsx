import React, { Component } from 'react';
import Search from '../components/Search';
import DisplaySearchFilm from '../components/DisplaySearchFilm/DisplaySearchFilm'

interface State {
    film: {}, 
    filmTitle: string,
}

export default class MovieApp extends Component {
    state: State = {
        // film: null,
        filmTitle: '',
        film: {
            Title: "Venom", Year: "2018", Rated: "PG-13", Released: "05 Oct 2018",
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
        // {Title:"Rocky",Year:"1976",Rated:"PG",Released:"03 Dec 1976",Runtime:"120 min",Genre:"Drama, Sport",
        // Director:"John G. Avildsen",Writer:"Sylvester Stallone",Actors:"Sylvester Stallone, Talia Shire, Burt Young, Carl Weathers",
        // Plot:"A small-time boxer gets a supremely rare chance to fight a heavy-weight champion in a bout in which he strives to go the distance for his self-respect.",
        // Language:"English",Country:"USA",Awards:"Won 3 Oscars. Another 17 wins & 21 nominations.",
        // Poster:"https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_SX300.jpg",
        // Ratings:[{Source:"Internet Movie Database",Value:"8.1/10"},{Source:"Rotten Tomatoes",Value:"93%"},{Source:"Metacritic",Value:"70/100"}],
        // Metascore:"70",imdbRating:"8.1",imdbVotes:"465,421",imdbID:"tt0075148",Type:"movie",DVD:"07 Aug 2006",
        // BoxOffice:"N/A",Production:"United Artists",Website:"http://rockythemovie.com/",Response:"True"}
         
    }

    searchFilm = (event: React.ChangeEvent<HTMLInputElement>, film: string): void => {
        event.preventDefault();
        this.setState({ filmTitle: film })
    }
    // componentDidUpdate(prevProps) {
    //     if (this.state.filmTitle !== ) {
    //         fetch(`http://www.omdbapi.com/?apikey=7852d187&t=${this.state.filmTitle}`)
    //             .then(response => response.json())
    //             .then(data => console.log(data));
    //     }
    // }
    // componentDidMount() {
    //     console.log(this.state.filmTitle)
    // //     fetch('http://www.omdbapi.com/?apikey=7852d187&t=Venom')
    // }


    render() {
        return (
            <div className="row">
                <Search sumbitFilm={this.searchFilm} />
                <DisplaySearchFilm filmDetails={this.state.film} />
            </div>
        )
    }
}
