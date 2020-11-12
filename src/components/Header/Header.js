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

  const main = (props.pathname === '/' || props.isMenuMobile);
  const classNameLogo = `header__logo ${main ? '' : 'header__logo_saved-news'}`;
  const classNameTextBtn = `header__text header__text_button ${main ? '' : 'header__text_saved-news'}`;
  const logout = main ? logoutMain : logoutSavedNews;
  const classBackground = `header__background-img ${main ? '' : 'header__background-img_saved-news'}`;

  function handleEsc(evt) {
    if (evt.key === 'Escape' && props.isMenuMobile) {
      props.showMenu();
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  });

  function handleOverlayClose() {
    if (props.isMenuMobile) {
      props.showMenu();
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
            handleMenuMobile={props.handleMenuMobile} pathname={props.pathname}
            showMenu={props.showMenu} classBurgerMenu={props.classBurgerMenu} isMenuMobile={props.isMenuMobile}
          />
        </div>
        <MenuMobile
          isShowMenu={props.isShowMenu}
          loggedIn={props.loggedIn}
          logout={logout}
          onClick={props.onClick}
        />
        {/* включить */}
        <div onClick={handleOverlayClose} className={`header__overlay ${props.isShowOverlay}`}/>
      </header>
    </>
  );
}

export default Header;
