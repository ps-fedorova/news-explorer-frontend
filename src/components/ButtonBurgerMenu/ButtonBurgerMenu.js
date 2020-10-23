import React from 'react';
import './ButtonBurgerMenu.css';
import '../../utils/color.css';

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
