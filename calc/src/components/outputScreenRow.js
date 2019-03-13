import React from 'react';

// Functional CompositionEvent
// Used to show Question/Answer

const OutputScreenRow = (props) => {
    return (
        <div className='screenrow'>
            <input type='text' readOnly value = {props.value} />
        </div>
    )
}

export default OutputScreenRow;