import React from 'react';

// Create a functional component
// Takes title as props.value

const CalculatorTitle = (props) => {
    return (
        <div className='calculator-title'>
            { props.value }
        </div>
    )
}

export default CalculatorTitle;