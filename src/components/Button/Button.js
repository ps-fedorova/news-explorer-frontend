import React from 'react';
import './Button.css';

function Button(props) {
  const page = (props.pathname === '/saved-news')
    ? 'button_type_outline-saved-news'
    : 'button_type_outline-main';

  return (
    // здесь про размер кнопки и основные атрибуты
    <button
      onClick={props.onClick}
      type={props.type}
      className={`button
    ${props.header ? `${page} header__button` : ''}
    ${props.menuMobile ? 'menu-mobile__button' : ''}
    ${props.searchForm ? 'search-form__button' : ''}
    ${props.cardList ? 'news-card-list__button' : ''}
    ${props.popup ? 'popup__button' : ''}
    ${props.disabled ? 'popup__button_disabled' : ''}
    `}
    >
      {props.image

        // если кнопка содержит картинку (как в хедере)
        ? <span className="button__container button__container_position">
          <span className={`button__text ${props.classNameTextBtn}`} title={props.title}>
            {props.value}
          </span>
          <img className={props.classNameImgBtn} src={props.src} alt={props.alt}/>
        </span>

        // если в кнопке только текст
        : <span className="button__container">
          <span className={`button__text ${props.classNameTextBtn}`} title={props.title}>
            {props.value}
          </span>
        </span>
      }
    </button>
  );
}

export default Button;
