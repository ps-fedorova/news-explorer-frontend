import React from 'react';
import './PopupInput.css';

function PopupInput(props) {
  return (
    <label className="input">{props.label}
      <input
        // id={props.id}
        type={props.type}
        value={props.value}
        minLength={props.minLength}
        maxLength={props.maxLength}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className='input__field'
        required
      />
      <span className={!props.isValid && 'input__error'}>
        {props.errorMessage}
      </span>
    </label>
  );
}

export default PopupInput;
