import React from 'react';
import './ButtonBurgerMenu.css';

function ButtonBurgerMenu(props) {
  const buttonBurgerMenu = `button-burger-menu ${(props.pathname === '/' || props.isMenuMobile)
    ? ''
    : 'button-burger-menu_saved-news'}`;

  return (
    <button
      className={`${buttonBurgerMenu}  ${props.classBurgerMenu}`}
      onClick={props.showMenu}
    />
  );
}

export default ButtonBurgerMenu;
