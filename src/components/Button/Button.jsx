import React from 'react';
import './Button.css';
import Icon from '@mui/material/Icon';

const Button = (props) => {
  return (
    <button {...props} className={'button' + props.className}>
      {props.icon && <Icon>{props.icon}</Icon>}

    </button>
  );
}

export default Button