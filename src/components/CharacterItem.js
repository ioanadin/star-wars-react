import React from 'react';
import { withRouter } from 'react-router-dom';
import './CharacterItem.css';

class CharacterItem extends React.Component {
    navigateToCharacterDetails = () => {
        this.props.history.push("/character", this.props.character);
    }

    render() {
        return (
            <div className="character-item" onClick={this.navigateToCharacterDetails}>
                <p>{this.props.character.name}</p>
            </div>
        );
    }
}

export default withRouter(CharacterItem);
