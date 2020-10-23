import React from 'react';
import './MenuMobile.css';
import { NavLink } from 'react-router-dom';

function MenuMobile(props) {
  return (
    <div className={`menu-mobile__position ${props.isShowMenu}`}>
      <menu className='menu-mobile'>
        <NavLink className="menu-mobile__link" to="/">Главная</NavLink>
        <NavLink className="menu-mobile__link" to="/saved-news">Сохраненные статьи</NavLink>
        <button className='button header__link menu-mobile__button' >Авторизоваться</button>
      </menu>
    </div>
  );
}

export default MenuMobile;
