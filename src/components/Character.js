import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import './Character.css';

function Character(props) {
    const character = props.history.location.state;

    if (character === undefined) {
        return <Redirect to="/" />
    }

    const heightFt = (character.height / 30.48).toFixed(2);

    return (
        <div>
            <h1 className="character-detail-name">{character.name}</h1>
            <div className="character-details">
                <ul>
                    <li>gender: {character.gender}</li>
                    <li>birth year: {character.birth_year}</li>
                    <li>height: {character.height}cm / {heightFt}ft</li>
                    <li>eye color: {character.eye_color}</li>
                    <li>hair color: {character.hair_color}</li>
                    <li>skin color: {character.skin_color}</li>
                    <li>mass: {character.mass}</li>
                </ul>

            </div>
        </div>
    );
};

export default withRouter(Character);
