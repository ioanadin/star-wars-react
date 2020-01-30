import React from 'react';
import Movie from './Movie';
import { getMovies } from '../util/swapi';
import Header from './Header';
import './Gallery.css';

class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            movieDetails: null
        };
    }

    componentDidMount() {
        getMovies()
            .then(movieDetails => {
                this.setState({ movieDetails });
            })
            .catch(() => {
                this.setState({ movieDetails: { count: 0 } });
            })
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }

    makeMovies() {
        let swMovies = [];

        const sortedByReleaseDate = this.state.movieDetails.results.sort((a, b) => {
            return a.release_date > b.release_date ? -1 : 1;
        })

        for (let i = 0; i < sortedByReleaseDate.length; i++) {
            swMovies.push(
                <Movie
                    key={sortedByReleaseDate[i].episode_id}
                    details={sortedByReleaseDate[i]}
                />
            );
        }

        return swMovies;
    }

    render() {
        return (
            <>
                <Header />
                <div className="movies-container">
                    {this.state.isLoading ? <p>Loading movies...</p> : this.makeMovies()}
                </div>
            </>
        );
    }

};

export default Gallery;
