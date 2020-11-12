import React from 'react';
import './MenuMobile.css';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function MenuMobile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <div className={`menu-mobile ${props.isShowMenu}`}>
      <div className='menu-mobile__container'>
        <Navigation loggedIn={props.loggedIn}/>
        {props.loggedIn
          ? <Button
            menuMobile={true}
            image={true}
            className='menu-mobile__button'
            value={currentUser}
            src={props.logout}
            alt="Выход"
            handleAuthButton={props.handleAuthButton}
            onClick={props.onClick}
          />
          : <Button
            className='menu-mobile__button'
            value='Авторизоваться'
            menuMobile={true}
            handleAuthButton={props.handleAuthButton}
            onClick={props.onClick}
          />
        }
      </div>
    </div>
  );
}

export default MenuMobile;
