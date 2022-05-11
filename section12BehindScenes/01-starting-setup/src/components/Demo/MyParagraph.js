import React from 'react';

const MyParagraph = props => {
    console.log('NyParagraph running!');
    return <p>{props.show ? 'This is new!!!' : ''}</p>
}

export default MyParagraph;