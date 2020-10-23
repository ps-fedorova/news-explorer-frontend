import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import '../../utils/color.css';
import Button from '../Button';
import ButtonBurgerMenu from '../ButtonBurgerMenu/ButtonBurgerMenu';
import MenuMobile from '../MenuMobile/MenuMobile';

import logout from '../../images/logout.svg';
import logoutDark from '../../images/logout-dark.svg';

function Header() {

  const [classBurgerMenu, setClassBurgerMenu] = React.useState('button-burger-menu_type_closed');
  const [isShowMenu, setIsShowMenu] = React.useState('menu-mobile_type_close');

  function showMenu() {
    if (classBurgerMenu === 'button-burger-menu_type_opened') {
      setClassBurgerMenu('button-burger-menu_type_closed');
    } else {
      setClassBurgerMenu('button-burger-menu_type_opened');
    }
    if (isShowMenu === 'menu-mobile_type_close') {
      setIsShowMenu('menu-mobile_type_open');
    } else {
      setIsShowMenu('menu-mobile_type_close');
    }
  }

  return (
    <header className="header">
      <div className="header__position">
        <NavLink to="/" className="header__logo">NewsExplorer</NavLink>
        <div className="header__menu">
          <NavLink className="header__text" to="/">Главная</NavLink>
          <Button
            // value="Грета"
            value="1234567890123456789012345678901234567890"
            header={true}
            classNameImg="header__button header__button-logout DARK-GRAY"
            src={logoutDark}
            alt="Выход"
          >
          </Button>
          <ButtonBurgerMenu
            showMenu={showMenu}
            classBurgerMenu={classBurgerMenu}
          />
        </div>
      </div>
      <MenuMobile
        isShowMenu={isShowMenu}
      />
    </header>
  );
}

export default Header;
