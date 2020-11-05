import React from 'react';
import './MenuMobile.css';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';

function MenuMobile(props) {
  return (
    <div className={`menu-mobile ${props.isShowMenu}`}>
      <div className='menu-mobile__container'>
        <Navigation loggedIn={props.loggedIn}/>
        {props.loggedIn
          ? <Button menuMobile={true} image={true} className='menu-mobile__button' value='Грета' src={props.logout}
                    alt="Выход"/>
          : <Button className='menu-mobile__button' value='Авторизоваться' menuMobile={true} onClick={props.onClick}/>
        }
      </div>
    </div>
  );
}

export default MenuMobile;
