import React from 'react';
import '../assets/css/SeparatorWide.css';

const SeparatorWide = ({rotation, marginBottom}) => {
    // Component logic and state here

    return (

        <div className='separatorWideContainer'
        style={{ transform: `rotate(${rotation}deg)`, marginBottom: `${marginBottom}`}}>
            <div className='separatorWideLine'></div>
        </div>
    );
};

export default SeparatorWide;