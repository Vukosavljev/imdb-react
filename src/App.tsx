import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MovieApp from './MovieApp/MovieApp';

import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <MovieApp />
      </BrowserRouter>
    );
  }
}

export default App;
