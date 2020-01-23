import React from 'react';
import { withRouter } from 'react-router-dom';
import { getCharacters } from '../util/swapi'

class CharacterGallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: []
        }


    }
    componentDidMount() {
        const characters = getCharacters(this.props.urls);
        this.setState({ characters });
    }



    render() {
        return < this.setState./>
    }
}


export default withRouter(CharacterGallery);