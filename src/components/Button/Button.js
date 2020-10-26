import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <button className={`button button_outline
    ${props.header ? 'header__button' : ''}
    ${props.menuMobile ? 'menu-mobile__button' : ''}
    ${props.searchForm ? 'search-form__button' : ''}
    `}>

      {props.header

        ? <div className="button__container button__container_header ">
          <div className="button__text" title={props.value}>
            {props.value}
          </div>
          <img className={props.classNameImg} src={props.src} alt={props.alt}/>
        </div>

        : <div className="button__container">
          <div className="button__text" title={props.value}>
            {props.value}
          </div>
        </div>
      }
    </button>
  );
}

export default Button;
