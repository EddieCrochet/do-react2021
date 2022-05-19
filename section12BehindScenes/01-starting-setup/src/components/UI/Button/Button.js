import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('Button running!');
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// only rerenders component in it got new values (memo)
export default React.memo(Button);
