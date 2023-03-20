import React from 'react';
import './IconButton.css';

const IconButton = ({children, color, border}) => {
    const btnStyle = {
        color,
        borderColor: border,
    }
    return (
        <button className='icon-btn' style={btnStyle} >
            {
                children
            }
        </button>
    );
};

export default IconButton;