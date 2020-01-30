import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import CharacterGallery from './CharacterGallery';
import OpeningCrawl from './OpeningCrawl';

function Details(props) {
    const details = props.history.location.state;

    if (details === undefined) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <OpeningCrawl text={details.opening_crawl} />
            <h1>{details.title}</h1>
            <h3>Episode {details.episode_id}</h3>
            <div><CharacterGallery urls={details.characters} /></div>
        </div>
    );
}

export default withRouter(Details);
