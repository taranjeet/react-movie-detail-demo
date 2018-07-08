import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import movies from './data.js';

import { MovieList } from './components';

class App extends Component {
  render() {
    return (
      <div className='container'>
      <h1>Movie Detail Demo</h1>
      <MovieList movies={movies} />
      </div>
    );
  }
}

export default App;
