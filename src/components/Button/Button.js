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
    `}
    >
      {props.image

        // если кнопка содержит картинку (как в хедере)
        ? <div className="button__container button__container_position">
          <div className={`button__text ${props.classNameTextBtn}`} title={props.value}>
            {props.value}
          </div>
          <img className={props.classNameImgBtn} src={props.src} alt={props.alt}/>
        </div>

        // если в кнопке только текст
        : <div className="button__container">
          <div className={`button__text ${props.classNameTextBtn}`} title={props.value}>
            {props.value}
          </div>
        </div>
      }
    </button>
  );
}

export default Button;
