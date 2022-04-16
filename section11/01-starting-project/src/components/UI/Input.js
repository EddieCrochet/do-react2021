import classes from './Input.module.css';
import React from 'react';

const Input = React.forwardRef((props, reff) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={reff} {...props.input} />
        </div>
    )
});

export default Input;