import './MainCards.css';
import './Utilities/Utilities.css';
import React from 'react';

function MainCards(props) {
    return (
        <>
            <div className='maincolumn card'>
                <h1>
                    Hello {props.name}
                </h1>
            </div>
            
        </>
    );
};

export default MainCards;