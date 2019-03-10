import React, { Component } from 'react';
import Search from '../components/Search';

export default class MovieApp extends Component {
    state = {
        film: null,
    }
  render() {
    return (
      <div className="row">
        <Search />
        {this.state.film}
      </div>
    )
  }
}
