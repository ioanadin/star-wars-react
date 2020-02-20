import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import { getMovies } from '../util/swapi';
import Header from './Header';
import './Gallery.css';

function Gallery() {
    const [isLoading, setIsLoading] = useState(true);
    const [movieDetails, setMovieDetails] = useState([]);

    useEffect(() => {
        const fetchInitialData = async () => {
            const response = await getMovies();
            setMovieDetails(response.results);
            setIsLoading(false);
        };
        fetchInitialData();
    }, []);

    const sortedByReleaseDate = movieDetails.sort((a, b) => {
        return a.release_date > b.release_date ? -1 : 1;
    });

    return (
        <>
            <Header />
            <div className="movies-container">
                {
                    isLoading ?
                        <p>Loading movies...</p> :
                        sortedByReleaseDate.map((movie) => {
                            return <Movie
                                key={movie.episode_id}
                                details={movie}
                            />
                        })
                }
            </div>
        </>
    );
};

export default Gallery;
