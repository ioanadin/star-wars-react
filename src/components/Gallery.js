import React from 'react';
import Movie from './Movie';
import getMovies from '../util/swapi';

// function Gallery() {
//     let apiResponse = getMovies()
//     console.log(apiResponse);
//     return <div>
//         {/* <Movie title={apiResponse.results[0].title} /> */}
//         <Movie />
//     </div>
// }


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

    async fetchMovieData() {
        const movieDetails = await getMovies();
        this.setState({ movieDetails: movieDetails, isLoading: false });
    }

    render() {
        if (this.state.isLoading) {
            return <div className='movie-item'>
                <p> Loading movies...</p>
            </div>
        }
        else {
            let swMovies = [];
            for (let i = 0; i < this.state.movieDetails.count; i++) {
                swMovies.push(<Movie details={this.state.movieDetails.results[i]} />)
            }
            return swMovies;
        }

    }
}

export default Gallery;