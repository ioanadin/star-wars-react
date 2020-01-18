import React from 'react';
import './App.css';
import Header from './components/Header';
import Movie from './components/Movie'
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery>
        <Movie />
      </Gallery>


    </div>
  );
}

export default App;
