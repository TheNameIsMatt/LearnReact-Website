import './MainCards.css';
import './Utilities/Utilities.css';
import React, { useEffect } from 'react';

function MainCards(props) {

    useEffect(()=>{
        console.log(props);
    });
    return (
        <>
            <div className='maincolumn card'>
                <h1>
                    Hello {props.APIData[0].title}
                </h1>
            </div>
            
        </>
    );
};

export default MainCards;