import React from 'react';
import './Movie.css';
import { withRouter } from 'react-router-dom';

class Movie extends React.Component {
    navigateToDetails = () => {
        this.props.history.push("/movie-details", this.props.details);
    }

    render() {
        return (
            <div className='movie-item' onClick={this.navigateToDetails}>
                {this.props.details.title}
                <br />
                {this.props.details.episode_id}
                <br />
                {this.props.details.release_date}
            </div>
        );
    }
}
export default withRouter(Movie);
