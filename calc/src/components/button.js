import React from 'react';

// Create out button component as a functional component

const Button = (props) => {
    return (
        <input 
        onClick = {props.handleClick}
        type='button'
        value={props.label}
        />
    );
}

export default Button;