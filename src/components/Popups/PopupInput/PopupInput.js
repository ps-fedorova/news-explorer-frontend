import React from 'react';
import './PopupInput.css';

function PopupInput(props) {
  return (
    <label className="input">{props.label}
      <input
        // id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        minLength={props.minLength}
        maxLength={props.maxLength}
        onChange={props.onChange}
        placeholder={props.placeholder}
        disabled={props.disabled}
        className='input__field'
        required
      />
      <span className={!props.isValid ? 'input__error' : ''}>
        {props.errors || ''}
      </span>
    </label>
  );
}

export default PopupInput;
