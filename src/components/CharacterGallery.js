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
            filteredCharacters: []
        };
    }

    async componentDidMount() {
        const characters = await getCharacters(this.props.urls);
        this.setState({
            characters: characters,
            filteredCharacters: characters
        });
    }

    makeCharacterItems() {
        const characterItems = [];

        for (let i = 0; i < this.state.filteredCharacters.length; i++) {
            characterItems.push(
                <CharacterItem character={this.state.characters[i]} />
            );
        }

        return characterItems;
    }

    render() {
        return (
            <div>
                <div className="character-gallery-filter">
                    <button>ALL</button>
                    <button>MALE</button>
                    <button>FEMALE</button>
                </div>
                <div className="character-gallery">{this.makeCharacterItems()}</div>
            </div>
        );
    }
}


export default withRouter(CharacterGallery);