import React from 'react';
import { withRouter } from 'react-router-dom';
import './CharacterItem.css';

class CharacterItem extends React.Component {
    navigateToCharacterDetails = () => {
        this.props.history.push("/character", this.props.character);
    }

    render() {
        const isSelectedGender = this.props.selectedGender === this.props.character.gender;
        const isAllGender = this.props.selectedGender === 'all';

        const className = isSelectedGender || isAllGender ? '' : 'character-hidden';

        return (
            <div className={`character-item ${className}`} onClick={this.navigateToCharacterDetails}>
                <p>{this.props.character.name}</p>
            </div>
        );
    }
}

export default withRouter(CharacterItem);
