import React from 'react';
import { withRouter } from 'react-router-dom';

class CharacterItem extends React.Component {

    render() {
        return (
            <div>
                <p>{this.props.character.name}</p>
            </div>
        );
    }

}

export default withRouter(CharacterItem);
