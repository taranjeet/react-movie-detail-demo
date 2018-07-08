import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import './App.css';

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
