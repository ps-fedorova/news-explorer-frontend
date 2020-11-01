import React from 'react';
import './MenuMobile.css';
import Link from '../Link/Link';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';

function MenuMobile(props) {
  return (
    <div className={`menu-mobile ${props.isShowMenu}`}>
      <div className='menu-mobile__container'>
        <Navigation/>
        <Button className='menu-mobile__button' value='Авторизоваться' menuMobile={true}/>
      </div>
    </div>
  );
}

export default MenuMobile;
