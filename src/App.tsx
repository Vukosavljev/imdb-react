import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MovieApp from './MovieApp/MovieApp';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <MovieApp />
      </div>
    );
  }
}

export default App;
