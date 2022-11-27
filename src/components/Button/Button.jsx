import React from 'react';
import './Button.css';
import Icon from '@mui/material/Icon';

const Button = (props) => {
  return (
    <button {...props} className={props.className? props.className: 'button'}>
      {props.icon && <Icon>{props.icon}</Icon>}
      {props.children}
    </button>
  );
}

export default Button