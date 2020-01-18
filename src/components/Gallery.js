import React from 'react';
import Movie from './Movie';
import getMovies from '../util/swapi';

function Gallery() {
    let apiResponse = getMovies()
    console.log(apiResponse);
    return <div>
        {/* <Movie title={apiResponse.results[0].title} /> */}
        <Movie />
    </div>
}

export default Gallery;