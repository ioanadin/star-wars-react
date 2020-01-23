import React from 'react';
import Movie from './Movie';
import getMovies from '../util/swapi';
import Header from './Header';

class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            movieDetails: null
        };
    }

    componentDidMount() {
        this.fetchMovieData();
    }

    fetchMovieData() {
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
        for (let i = 0; i < this.state.movieDetails.count; i++) {
            swMovies.push(<Movie details={this.state.movieDetails.results[i]} />)
        }

        return swMovies;
    }

    render() {
        return (
            <>
                <Header />
                {this.state.isLoading ? <p> Loading movies...</p> : this.makeMovies()}
            </>
        );
    }

};

export default Gallery;