import React from 'react';
import './MenuMobile.css';
import { NavLink } from 'react-router-dom';
import Link from '../Link';
import Button from '../Button';

function MenuMobile(props) {
  return (
    <div className={`menu-mobile ${props.isShowMenu}`}>
      <nav className='menu-mobile__position'>
        <Link
          className="menu-mobile__link"
          to="/"
          value="Главная"
        >
        </Link>
        <Link
          className="menu-mobile__link"
          to="/saved-news"
          value="Сохраненные статьи"
        />
        <Button
          className='menu-mobile__button'
          value='Авторизоваться'
          menuMobile={true}
        />
      </nav>
    </div>
  );
}

export default MenuMobile;
