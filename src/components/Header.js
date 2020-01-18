import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <img src={process.env.PUBLIC_URL + '/SWlogo.jpg'} alt='Star Wars logo' />
        </header >
    );
}

export default Header;