import React from 'react';
import './MenuMobile.css';
import Link from '../Link/Link';
import Button from '../Button/Button';

function MenuMobile(props) {
  return (
    <div className={`menu-mobile ${props.isShowMenu}`}>
      <nav className='menu-mobile__position'>
        <Link className="menu-mobile__link" to="/" value="Главная"/>
        <Link className="menu-mobile__link" to="/saved-news" value="Сохраненные статьи"/>
        <Button className='menu-mobile__button' value='Авторизоваться' menuMobile={true}/>
      </nav>
    </div>
  );
}

export default MenuMobile;
