import React from 'react';
import './OpeningCrawl.css';

function OpeningCrawl({ text }) {
    return (
        <div>
            <div className='opening-crawl-fade'>
            </div>
            <div className='opening-crawl-container'>
                <p className='opening-crawl-text'>{text}</p>
            </div>
        </div>
    )
}

export default OpeningCrawl;
