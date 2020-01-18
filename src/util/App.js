import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../components/Header';
import Movie from '../components/Movie'
import Gellery from '../components/Gallery'
import gallery from '../components/Gallery';

function App() {
  return (
    <div className="App">
      <Header />
      <gallery>
        <Movie />
      </gallery>

    </div>
  );
}

export default App;
