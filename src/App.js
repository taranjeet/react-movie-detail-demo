import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import logo from './logo.svg';
import './App.css';
import movies from './data.js';

import { MovieList, MovieDetail } from './components';

class App extends Component {
  render() {
    return (
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/movie/:number" component={MovieDetail} />
        </Switch>
    );
  }
}

export default App;
