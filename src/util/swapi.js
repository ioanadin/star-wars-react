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

async function getCharacters(characterUrlArray) {
    const promises = characterUrlArray.map((url) => fetchData(url));
    return await Promise.all(promises);
}

export { getMovies, getCharacters };
