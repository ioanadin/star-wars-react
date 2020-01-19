import React from 'react';
import './Movie.css';
import swapi from '../util/swapi';
import getMovies from '../util/swapi';


// function Movie(props) {
//     return (
//         <div>
//             <h1>Star Wars</h1>
//         </div>

//     )
// }
class Movie extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: null,
            isLoading: true,
        };
    }

    componentDidMount() {
        this.fetchMovieData();
    }


    preloadImage(movieDetails) {
        const image = new Image();
        image.src = movieDetails.url;
        image.onload = () => {
            this.setState({ movieDetails, isLoading: false });
        }
    };

    async fetchMovieData() {
        this.setState({ isLoading: true });
        const movieDetails = await getMovies();
        this.setState({ title: movieDetails.results[0].title, isLoading: false });
    }

    render() {
        if (this.state.isLoading) {
            return <div className='movie-item'>
                <p> Loading...</p>
            </div>
        }
        else {
            return <div className='movie-item'>
                {this.state.title}
            </div>


        }

    }




}
export default Movie;