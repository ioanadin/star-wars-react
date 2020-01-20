import React from 'react';

const swapi = 'https://swapi.co/api/';
const films = 'https://swapi.co/api/films/';

async function getMovies() {
    const movies = await fetch(films);

    if (movies.ok === true) {
        return await movies.json();
    }
    else {
        throw new Error();
    }
}

export default getMovies;
