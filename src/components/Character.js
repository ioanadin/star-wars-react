import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

function Character(props) {
    const character = props.history.location.state;

    if (character === undefined) {
        return <Redirect to="/" />
    }

    return (
        <div>
            {character.name}
            {character.height}
        </div>
    )

};

export default withRouter(Character);
