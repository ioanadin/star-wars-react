import React from 'react';
import { useHistory } from 'react-router-dom';
import './CharacterItem.css';

function CharacterItem({ character, selectedGender }) {
    const history = useHistory();

    function navigateToCharacterDetails() {
        history.push("/character", character);
    }

    const isSelectedGender = selectedGender === character.gender;
    const isAllGender = selectedGender === 'all';
    const className = isSelectedGender || isAllGender ? '' : 'character-hidden';

    return (
        <div className={`character-item ${className}`} onClick={navigateToCharacterDetails}>
            <p>{character.name}</p>
        </div>
    );
}

export default CharacterItem;
