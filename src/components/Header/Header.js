import React from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import Button from '../Button/Button';
import ButtonBurgerMenu from '../ButtonBurgerMenu/ButtonBurgerMenu';
import MenuMobile from '../MenuMobile/MenuMobile';
import Link from '../Link/Link';
import Navigation from '../Navigation/Navigation';
import '../../utils/color.css';
import './Header.css';

import logoutMain from '../../images/logout_main.svg';

import logoutSavedNews from '../../images/logout_saved_news.svg';

function Header(props) {
  const [isMenuMobile, setMenuMobile] = React.useState(false);
  const [classBurgerMenu, setClassBurgerMenu] = React.useState('');
  const [isShowMenu, setIsShowMenu] = React.useState('');
  const [isShowOverlay, setIsShowOverlay] = React.useState('');

  function handleMenuMobile() {
    setMenuMobile(!isMenuMobile);
  }

  function showMenu() {
    if (classBurgerMenu === 'button-burger-menu_open') {
      setClassBurgerMenu('');
      setIsShowOverlay('');
      handleMenuMobile();
    } else {
      setClassBurgerMenu('button-burger-menu_open');
      setIsShowOverlay('header__overlay_open');
      handleMenuMobile();
    }
    if (isShowMenu === '') {
      setIsShowMenu('menu-mobile_open');
      disablePageScroll();
    } else {
      setIsShowMenu('');
      enablePageScroll();
    }
  }

  const main = (props.pathname === '/' || isMenuMobile);

  const classNameLogo = `header__logo ${main ? '' : 'header__logo_saved-news'}`;
  const classNameTextBtn = `header__text header__text_button ${main ? '' : 'header__text_saved-news'}`;
  const logout = main ? logoutMain : logoutSavedNews;
  const classBackground = `header__background-img ${main ? '' : 'header__background-img_saved-news'}`;

  return (
    <>
      <header className="header">

        <div className="header__background-position">
          <div className={classBackground}/>
        </div>
        <div className="header__container">

          <span className="header__border"/>
          <Link navLink={true} title="Перейти на страницу с поиском" className={classNameLogo} to='/'
                value="NewsExplorer"/>
          <div className="header__menu">

           <Navigation
             pathname={props.pathname}
             isMenuMobile={props.isMenuMobile}
           />
            <div className="header__button-container">
              <Button
                pathname={props.pathname}
                image={true}
                header={true}
                classNameImgBtn="header__button-img"
                classNameTextBtn={classNameTextBtn}
                value="Авторизоваться и Грета"
                src={logout}
                alt="Выход"
              />
            </div>
          </div>
          <div className="header__button-burger-menu-container">
            <ButtonBurgerMenu handleMenuMobile={handleMenuMobile} pathname={props.pathname} showMenu={showMenu}
                              classBurgerMenu={classBurgerMenu} isMenuMobile={isMenuMobile}/>
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
