import React from 'react';
import './App.css';
import Gallery from './components/Gallery';
import Details from './components/Details'
import Character from './components/Character'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Gallery />
        </Route>

        <Route path="/movie-details">
          <Details />
        </Route>

        <Route path="/character">
          <Character />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
