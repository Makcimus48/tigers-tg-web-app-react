import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button {...props} className={'button' + props.className}>
      {icon && <Icon type={icon}/>}
      
    </button>
  );
}

export default Button