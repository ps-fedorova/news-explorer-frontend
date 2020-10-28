import React from 'react';
import './Button.css';

function Button(props) {
  return (
    // здесь про размер кнопки и основные атрибуты
    <button className={`button
    ${props.header ? 'button_outline header__button' : ''}
    ${props.menuMobile ? 'menu-mobile__button' : ''}
    ${props.searchForm ? 'search-form__button' : ''}
    `}>

      {props.image

        // если кнопка содержит картинку (как в хедере)
        ? <div className="button__container button__container_position">
          <div className={`button__text ${props.classNameText}`} title={props.value}>
            {props.value}
          </div>
          <img className={props.classNameImg} src={props.src} alt={props.alt}/>
        </div>

        // если в кнопке только текст
        : <div className="button__container">
          <div className={`button__text ${props.classNameText}`} title={props.value}>
            {props.value}
          </div>
        </div>
      }
    </button>
  );
}

export default Button;
