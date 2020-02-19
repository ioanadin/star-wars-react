import React from 'react';
import { withRouter } from 'react-router-dom';
import { getCharacters } from '../util/swapi';
import CharacterItem from './CharacterItem';
import './CharacterGallery.css';

class CharacterGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            selectedGender: 'all'
        };
    }

    async componentDidMount() {
        const characters = await getCharacters(this.props.urls);
        this.setState({ characters });
    }

    showMaleGender = () => {
        this.setState({ selectedGender: 'male' });
    }

    showFemaleGender = () => {
        this.setState({ selectedGender: 'female' });
    }

    showAllGenders = () => {
        this.setState({ selectedGender: 'all' });
    }

    render() {
        return (
            <div>
                <div className="character-gallery-filter">
                    <button onClick={this.showAllGenders}>ALL</button>
                    <button onClick={this.showMaleGender}>MALE</button>
                    <button onClick={this.showFemaleGender}>FEMALE</button>
                </div>
                <div className="character-gallery">
                    {
                        this.state.characters.map((character) => {
                            return <CharacterItem
                                key={character.name}
                                selectedGender={this.state.selectedGender}
                                character={character}
                            />
                        })
                    }
                </div>
            </div>
        );
    }
}


export default withRouter(CharacterGallery);
