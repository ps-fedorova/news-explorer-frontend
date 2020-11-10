import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Button from '../Button/Button';
import ButtonBurgerMenu from '../ButtonBurgerMenu/ButtonBurgerMenu';
import MenuMobile from '../MenuMobile/MenuMobile';
import Link from '../Link/Link';
import Navigation from '../Navigation/Navigation';
import './Header.css';

import logoutMain from '../../images/logout_main.svg';
import logoutSavedNews from '../../images/logout_saved_news.svg';

function Header(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isMenuMobile, setMenuMobile] = React.useState(false);
  const [classBurgerMenu, setClassBurgerMenu] = React.useState('');
  const [isShowMenu, setIsShowMenu] = React.useState('');
  const [isShowOverlay, setIsShowOverlay] = React.useState('');
  const main = (props.pathname === '/' || isMenuMobile);
  const classNameLogo = `header__logo ${main ? '' : 'header__logo_saved-news'}`;
  const classNameTextBtn = `header__text header__text_button ${main ? '' : 'header__text_saved-news'}`;
  const logout = main ? logoutMain : logoutSavedNews;
  const classBackground = `header__background-img ${main ? '' : 'header__background-img_saved-news'}`;

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
    } else {
      setIsShowMenu('');
    }
  }

  function handleEsc(evt) {
    if (evt.key === 'Escape' && isMenuMobile) {
      showMenu();
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  });

  function handleOverlayClose() {
    if (isMenuMobile) {
      showMenu();
    }
  }

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
              loggedIn={props.loggedIn}
            />
            <div className="header__button-container">

              {props.loggedIn
                ? <Button
                  title="Выход"
                  value={currentUser}
                  pathname={props.pathname}
                  image={true}
                  header={true}
                  classNameImgBtn="header__button-img"
                  classNameTextBtn={classNameTextBtn}
                  src={logout}
                  alt="Выход"
                  onClick={props.onClick}
                />

                : < Button
                  title="Авторизоваться"
                  value="Авторизоваться"
                  pathname={props.pathname}
                  header={true}
                  classNameImgBtn="header__button-img"
                  classNameTextBtn={classNameTextBtn}
                  onClick={props.onClick}
                />
              }

            </div>
          </div>
          <ButtonBurgerMenu
            handleMenuMobile={handleMenuMobile} pathname={props.pathname}
            showMenu={showMenu} classBurgerMenu={classBurgerMenu} isMenuMobile={isMenuMobile}
          />
        </div>
        <MenuMobile
          isShowMenu={isShowMenu}
          loggedIn={props.loggedIn}
          logout={logout}
          onClick={props.onClick}
        />
        {/* включить */}
        <div onClick={handleOverlayClose} className={`header__overlay ${isShowOverlay}`}/>
      </header>
    </>
  );
}

export default Header;
