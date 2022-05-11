import React from 'react';

const demoOutput = props => {
    console.log('DemoOutput running!');
    return <p>{props.show ? 'This is new!!!' : ''}</p>
}

export default demoOutput;