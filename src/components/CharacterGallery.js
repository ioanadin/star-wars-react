import React from 'react';
import { withRouter } from 'react-router-dom';
import { getCharacters } from '../util/swapi';
import CharacterItem from './CharacterItem';
import './CharacterGallery.css';

class CharacterGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: []
        };
    }

    async componentDidMount() {
        const characters = await getCharacters(this.props.urls);
        this.setState({ characters });
    }

    makeCharacterItems() {
        const characterItems = [];

        for (let i = 0; i < this.state.characters.length; i++) {
            characterItems.push(
                <CharacterItem character={this.state.characters[i]} />
            );
        }

        return characterItems;
    }

    render() {
        return <div className="character-gallery">{this.makeCharacterItems()}</div>;
    }
}


export default withRouter(CharacterGallery);