import React from 'react';
import './ButtonBurgerMenu.css';

function ButtonBurgerMenu(props) {
  return (
    <button
      className={`button-burger-menu  ${props.classBurgerMenu}`}
      onClick={props.showMenu}
    >
      <span/>
    </button>
  );
}

export default ButtonBurgerMenu;
