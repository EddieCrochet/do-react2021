import './Card.css';
import React from 'react';

function Card(props) {
    const classes = 'card ' + props.className;
    // anything inside unique component  will be props.children
    // IE. allows you to create  wrapper components
    return <div className={classes}>{props.children}</div>
}

export default Card;