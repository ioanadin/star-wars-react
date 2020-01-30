import React from 'react';
import { withRouter } from 'react-router-dom';

function Character(props) {
    const character = props.history.location.state;

    return (
        <div>
            {character.name}
            {character.height}
        </div>
    )

};

export default withRouter(Character);
