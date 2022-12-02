import './MainCards.css';
import './Utilities/Utilities.css';
import React, { useEffect } from 'react';

function MainCards(props) {

    useEffect(() => {

    }, []);

    return (
        <>
            <div className='maincolumn card'>
                { props.APIData.length > 0 &&
                    <h1>
                        Hello {props.APIData[props.count].title}
                    </h1>
                }
            </div>

        </>
    );
};

export default MainCards;