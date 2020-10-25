import React from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import './Header.css';
import '../../utils/color.css';
import Button from '../Button/Button';
import ButtonBurgerMenu from '../ButtonBurgerMenu/ButtonBurgerMenu';
import MenuMobile from '../MenuMobile/MenuMobile';

import logout from '../../images/logout.svg';
// import logoutDark from '../../images/logout-dark.svg';
import Link from '../Link/Link';

function Header() {
  const [classBurgerMenu, setClassBurgerMenu] = React.useState('');
  const [isShowMenu, setIsShowMenu] = React.useState('');
  const [isShowOverlay, setIsShowOverlay] = React.useState('');

  function showMenu() {
    if (classBurgerMenu === 'button-burger-menu_open') {
      setClassBurgerMenu('');
      setIsShowOverlay('');
    } else {
      setClassBurgerMenu('button-burger-menu_open');
      setIsShowOverlay('header__overlay_open');
    }
    if (isShowMenu === '') {
      setIsShowMenu('menu-mobile_open');
      disablePageScroll();
    } else {
      setIsShowMenu('');
      enablePageScroll();
    }
  }

  return (
    <header className="header">
      <span className="header__border"/>
      <div className="header__container">
        <Link navLink={true} className="header__logo" to="/" value="NewsExplorer"/>
        <div className="header__menu">
          <Link navLink={true} className="header__text" to="/" value="Главная"/>
          <Link navLink={true} className="header__text" to="/saved-news" value="Сохраненные статьи"/>
          <Button value="1234567890123456789012345678901234567890" header={true}
                  classNameImg="header__button header__button-logout" src={logout} alt="Выход">
          </Button>
        </div>
        <ButtonBurgerMenu showMenu={showMenu} classBurgerMenu={classBurgerMenu}/>
      </div>
      <MenuMobile isShowMenu={isShowMenu}/>
     {/*включить*/}
      {/*<div className={`header__overlay ${isShowOverlay}`}/>*/}
    </header>
  );
}

export default Header;
