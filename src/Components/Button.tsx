import React from 'react';

interface IButtonprops {
    label : string;
    handleclick : () => void
}

const Button = (props : IButtonprops) => {
    const {label,handleclick} = props;

  return (
    <div>
        <button className='buttons' onClick={handleclick}>{label}</button>
    </div>
  )
}

export default Button;