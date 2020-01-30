import React from 'react';
import './OpeningCrawl.css';

function OpeningCrawl(props) {
    return (
        <div>
            <div className='opening-crawl-fade'>
            </div>
            <div className='opening-crawl-container'>
                <p className='opening-crawl-text'>{props.text}</p>
            </div>
        </div>
    )
}

export default OpeningCrawl;
