import React from 'react';
import './App.css';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Details from './components/Details'
import Characters from './components/Characters'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Gallery</Link>
          </li>
          <li>
            <Link to="/about">Details</Link>
          </li>
          <li>
            <Link to="/dashboard">Characters</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Gallery />
          </Route>
          <Route path="/about">
            <Details />
          </Route>
          <Route path="/dashboard">
            <Characters />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
