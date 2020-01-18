const swapi = 'https://swapi.co/api/';
const films = 'https://swapi.co/api/films/';

function getMovies() {
    const movies = await fetch(films);
    if (response.ok === true) {
        return await movies.json();
    }
    else {
        return <h3>error</h3>;
    }