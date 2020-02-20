import React, { useEffect, useState } from 'react';
import { getCharacters } from '../util/swapi';
import CharacterItem from './CharacterItem';
import './CharacterGallery.css';

function CharacterGallery(props) {
    const [characters, setCharacters] = useState([]);
    const [selectedGender, setSelectedGender] = useState('all');

    useEffect(() => {
        const fetchInitialData = async () => {
            const response = await getCharacters(props.urls);
            setCharacters(response);
        };
        fetchInitialData();
    }, [props.urls]);

    return (
        <div>
            <div className="character-gallery-filter">
                <button onClick={() => setSelectedGender('all')}>ALL</button>
                <button onClick={() => setSelectedGender('male')}>MALE</button>
                <button onClick={() => setSelectedGender('female')}>FEMALE</button>
            </div>
            <div className="character-gallery">
                {
                    characters.map((character) => {
                        return <CharacterItem
                            key={character.name}
                            selectedGender={selectedGender}
                            character={character}
                        />
                    })
                }
            </div>
        </div>
    );

}

export default CharacterGallery;
