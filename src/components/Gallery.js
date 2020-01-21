import React from 'react';
import Movie from './Movie';
import getMovies from '../util/swapi';
import Header from './Header';


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

    // let swMovies = [];
    // for (let i = 0; i < this.state.movieDetails.count; i++) {
    //     swMovies.push(<Movie details={this.state.movieDetails.results[i]} />)
    // }
    // return swMovies;

    componentDidMount() {
        this.fetchMovieData();
    }

    async fetchMovieData() {
        // const movieDetails = await getMovies();
        // this.setState({ movieDetails: movieDetails, isLoading: false });
        // try {
        //     const movieDetails = await getMovies();
        //     this.setState({ movieDetails: movieDetails, isLoading: false });
        // }
        // catch (err) {
        //     console.log(err);
        //     this.setState({
        //         movieDetails: {
        //             count: 0
        //         }, isLoading: false
        //     });
        // }
        getMovies()
            .then(movieDetails => {
                console.log(movieDetails);
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