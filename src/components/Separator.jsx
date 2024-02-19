import React from 'react';
import '../assets/css/Separator.css';

const Separator = ({rotation}) => {
    // Component logic and state here

    return (

        <div className='separatorContainer'
        style={{ transform: `rotate(${rotation}deg)` }}>
            <div className='separatorLine'>
                {/* <svg version="1.1" id="Capa_1" width="800px" height="800px" viewBox="0 0 290.658 290.658" xmlSpace="preserve">
                    <g>
                        <g>
                            <rect y="139.474" style={{fill: 'black'}} width="290.658" height="11.711"/>
                        </g>
                    </g>
                </svg> */}
            </div>
        </div>
    );
};

export default Separator;