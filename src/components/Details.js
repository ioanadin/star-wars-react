import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import CharacterGallery from './CharacterGallery';
import OpeningCrawl from './OpeningCrawl';
import './Details.css';

function Details(props) {
    const details = props.history.location.state;

    if (details === undefined) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <OpeningCrawl text={details.opening_crawl} />
            <h1 className="episode-title">{details.title}</h1>
            <h3 className="episode-id">Episode {details.episode_id}</h3>
            <div><CharacterGallery urls={details.characters} /></div>
        </div>
    );
}

export default withRouter(Details);
