import React from 'react';
import './Movie.css';
import swapi from '../util/swapi';
import getMovies from '../util/swapi';


class Movie extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div className='movie-item'>
            {this.props.details.title}
            <br />
            {this.props.details.episode_id}
            <br />
            {this.props.details.release_date}
        </div>
    }
}
export default Movie;