import React from 'react';
import './ButtonBurgerMenu.css';

function ButtonBurgerMenu(props) {
  const buttonBurgerMenu = `button-burger-menu__button ${(props.pathname === '/' || props.isMenuMobile)
    ? ''
    : 'button-burger-menu_saved-news'}`;

  return (
    <div className="button-burger-menu">
      <button
        className={`${buttonBurgerMenu}  ${props.classBurgerMenu}`}
        onClick={props.showMenu} type='button'
      />
    </div>
  );
}

export default ButtonBurgerMenu;
