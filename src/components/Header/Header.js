import React from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import Button from '../Button/Button';
import ButtonBurgerMenu from '../ButtonBurgerMenu/ButtonBurgerMenu';
import MenuMobile from '../MenuMobile/MenuMobile';
import Link from '../Link/Link';

import './Header.css';
import '../../utils/color.css';

import logout from '../../images/logout.svg';

// import logoutDark from '../../images/logout-dark.svg';

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
    <>
      <header className="header">

        <div className="header__background-position">
          <div className="header__background-img"/>
        </div>
        <div className="header__container">

          <span className="header__border"/>
          <Link navLink={true} className="header__logo" to="/" value="NewsExplorer"/>
          <div className="header__menu">
            <nav className="header__nav">
              <ul className="header__list">
                <li className="header__item">
                  <Link navLink={true} className="header__text header__text_selected" to="/" value="Главная"/>
                </li>
                <li className="header__item">
                  <Link navLink={true} className="header__text" to="/saved-news" value="Сохранённые статьи"/>
                </li>
              </ul>
            </nav>
            <div className="header__button-container">
              <Button
                image={true}
                header={true}
                classNameImg="header__button-img"
                classNameText="header__text header__text_button"
                // value="Грета"
                value="Грета1234567890123456789012345678901234567890"
                src={logout}
                alt="Выход"
              />
            </div>
          </div>
          <div className="header__button-burger-menu-container">
            <ButtonBurgerMenu showMenu={showMenu} classBurgerMenu={classBurgerMenu}/>
          </div>
        </div>

        <MenuMobile isShowMenu={isShowMenu}/>
        {/* включить */}
        {/* <div className={`header__overlay ${isShowOverlay}`}/> */}
      </header>

    </>
  );
}

export default Header;
