import React from 'react';
import Link from '../Link/Link';
import './Navigation.css';

// Навигация входит в MenuMobile, контекст там.
// Не могу перетащить сюда кнопку,
// потому что они в хедере и мобильном меню разные
function Navigation(props) {
  const main = (props.pathname === '/' || props.isMenuMobile);
  const classNameTextMain = `nav__text ${main ? 'nav__text_selected' : 'nav__text_saved-news'}`;
  const classNameTextSavedNews = `nav__text ${main ? '' : 'nav__text_saved-news nav__text_selected-saved-news'}`;

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link navLink={true} title="Перейти на страницу с поиском"
                className={classNameTextMain} to="/" value="Главная"/>
        </li>
        {props.loggedIn && <li className="nav__item">
          <Link navLink={true} title="Перейти на страницу с сохранёнными статьями"
                className={classNameTextSavedNews}
                to="/saved-news" value="Сохранённые статьи"/>
        </li>
        }
      </ul>
    </nav>
  );
}

export default Navigation;
