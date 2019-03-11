import React, { Component } from 'react';
import Search from '../components/Search';

export default class MovieApp extends Component {
    state = {
        // film: null,
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
        } 
    }

    searchFilm = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault();
        console.log(event.target.value);
    }
    // componentDidMount() {
    //     fetch('http://www.omdbapi.com/?apikey=7852d187&t=Venom')
    //         .then(response => response.json())
    //         .then(data => console.log(data));
    // }

    render() {
        return (
            <div className="row">
                <Search sumbitFilm={this.searchFilm} />
                
            </div>
        )
    }
}
