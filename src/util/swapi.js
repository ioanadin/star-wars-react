import React from 'react';

const swapi = 'https://swapi.co/api/';
const films = 'https://swapi.co/api/films/';

async function fetchData(url) {
    const response = await fetch(url);

    if (response.ok === true) {
        return await response.json();
    }
    else {
        throw new Error();
    }
}

async function getMovies() {
    return await fetchData(films);
}

export { getMovies, fetchData };
