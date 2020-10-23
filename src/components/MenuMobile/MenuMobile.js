import React from 'react';
import './MenuMobile.css';
import { NavLink } from 'react-router-dom';
import Link from '../Link';

function MenuMobile(props) {
  return (
    <div className={`menu-mobile__position ${props.isShowMenu}`}>
      <menu className='menu-mobile'>
        <Link
          className="menu-mobile__link"
          to="/"
          value = "Главная"
        >
        </Link>
        <Link
          className="menu-mobile__link"
          to="/saved-news"
          value="Сохраненные статьи"
        />
        <button className='button header__link menu-mobile__button' >Авторизоваться</button>
      </menu>
    </div>
  );
}

export default MenuMobile;
