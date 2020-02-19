import React from 'react';
import { useHistory } from 'react-router-dom';
import matchEpisodeToPicture from '../util/matchEpisodeToPicture';
import './Movie.css';

function Movie({ details }) {
    const history = useHistory();
    const imageUrl = matchEpisodeToPicture(details.episode_id);

    function navigateToDetails() {
        history.push("/movie-details", details);
    }

    return (
        <div className='movie-item' onClick={navigateToDetails}>
            <img src={imageUrl} alt="star wars movie poster" />
        </div>
    );
}

export default Movie;
