import React from 'react';
import './Button.css';

function Button(props) {
  return (
      <button className={`button button_outline ${props.header ? 'header__button' : ''}`}>
      <div
        className="button__position"
      >
        <div
          className="button__text"
          title={props.value}
        >
          {props.value}
        </div>

      {props.header
        ? <img className={props.classNameImg} src={props.src} alt={props.alt}/>
        : <></>
      }
      </div>
    </button>
  );
}

export default Button;
