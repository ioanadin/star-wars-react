import React from 'react';
import './Movie.css';
import { withRouter } from 'react-router-dom';
import matchEpisodeToPicture from '../util/matchEpisodeToPicture';

class Movie extends React.Component {
    navigateToDetails = () => {
        this.props.history.push("/movie-details", this.props.details);
    }

    render() {
        const imageUrl = matchEpisodeToPicture(this.props.details.episode_id);
        return (
            <div className='movie-item' onClick={this.navigateToDetails}>
                <img src={imageUrl} alt="star wars movie poster" />
                {/*<div className="movie-item-name">
                    <h2>{this.props.details.title}</h2>
                </div>

                <div className='movie-item-image'>

                </div>

                 
                <br />
                {this.props.details.episode_id}
                <br />
                {this.props.details.release_date} */}
            </div>
        );
    }
}
export default withRouter(Movie);
