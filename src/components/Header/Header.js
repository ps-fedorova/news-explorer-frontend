import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import '../../utils/color.css';
import Button from '../Button/Button';
import ButtonBurgerMenu from '../ButtonBurgerMenu/ButtonBurgerMenu';
import MenuMobile from '../MenuMobile/MenuMobile';

import logout from '../../images/logout.svg';
// import logoutDark from '../../images/logout-dark.svg';
import Link from "../Link/Link";

function Header() {

  const [classBurgerMenu, setClassBurgerMenu] = React.useState('button-burger-menu_type_closed');
  const [isShowMenu, setIsShowMenu] = React.useState('menu-mobile_type_close');
  const [isShowOverlay, setIsShowOverlay] = React.useState('');

  function showMenu() {
    if (classBurgerMenu === 'button-burger-menu_type_opened') {
      setClassBurgerMenu('button-burger-menu_type_closed');
      setIsShowOverlay("");
    } else {
      setClassBurgerMenu('button-burger-menu_type_opened');
      setIsShowOverlay('header__overlay');
    }
    if (isShowMenu === 'menu-mobile_type_close') {
      setIsShowMenu('menu-mobile_type_open');
    } else {
      setIsShowMenu('menu-mobile_type_close');
    }
  }

  return (
    <header className="header">
      <span className="header__border"/>
      <div className="header__position">
        <Link className="header__logo" to="/" value="NewsExplorer"/>
        <div className="header__menu">
          <Link className="header__text" to="/" value="Главная"/>
          <Link className="header__text" to="/saved-news" value="Сохраненные статьи"/>
          <Button value="1234567890123456789012345678901234567890" header={true}
                  classNameImg="header__button header__button-logout DARK-GRAY" src={logout} alt="Выход">
          </Button>
        </div>
        <ButtonBurgerMenu showMenu={showMenu} classBurgerMenu={classBurgerMenu}/>
      </div>
      <MenuMobile isShowMenu={isShowMenu}/>
      <div className={isShowOverlay}/>
    </header>
  );
}

export default Header;
