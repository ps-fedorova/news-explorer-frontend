import React from 'react';
import {
  Route, Switch, useLocation,
} from 'react-router-dom';

import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import Login from '../Popups/Login/Login';
import Register from '../Popups/Register/Register';
import InfoTooltip from '../Popups/InfoTooltip/InfoTooltip';
import articles from '../../utils/articles';

import '../../vendor/normalize.css';
import '../../vendor/fonts.css';
import './App.css';

function App() {
  const { pathname } = useLocation();
  const [rowArticles, setRowArticles] = React.useState(0);
  const isLoading = false;
  const loggedIn = false;

  const [isLoginOpen, setLoginOpen] = React.useState(false);
  const [isRegisterOpen, setRegisterOpen] = React.useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);

  function handleShowMoreArticles() {
    setRowArticles(rowArticles + 1);
  }

  function handleLoginOpen() {
    setLoginOpen(true);
    setRegisterOpen(false);
    setInfoTooltipOpen(false);
    disablePageScroll();
  }

  function handleRegisterOpen() {
    setLoginOpen(false);
    setRegisterOpen(true);
    disablePageScroll();
  }

  function handleInfoTooltipOpen() {
    setRegisterOpen(false);
    setLoginOpen(true);
    disablePageScroll();
  }

  function closeAllPopups() {
    setLoginOpen(false);
    setRegisterOpen(false);
    setInfoTooltipOpen(false);
    enablePageScroll();
  }

  function handleEsc(evt) {
    if (evt.key === 'Escape') {
      closeAllPopups();
      enablePageScroll();
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  });

  return (
    <>
      <Header
        pathname={pathname}
        loggedIn={loggedIn}
        onClick={handleLoginOpen}
      />
      <Switch>

        <Route exact path="/">{/* Главная */}
          <Main
            articles={articles}
            pathname={pathname}
            loggedIn={loggedIn}
            isLoading={isLoading}
            handleShowMoreArticles={handleShowMoreArticles}
            rowArticles={rowArticles}
          />
        </Route>

        <Route path="/saved-news"> {/* Сохраненные новости */}
          <SavedNews
            articles={articles} // чтобы считать количество новостей
            pathname={pathname}
            loggedIn={loggedIn}
          />
        </Route>
      </Switch>
      <Footer/>
      <Login
        isOpen={isLoginOpen}
        onClose={closeAllPopups}
        onChangeForm={handleRegisterOpen}
      />
       <Register
        isOpen={isRegisterOpen}
        onClose={closeAllPopups}
        onChangeForm={handleLoginOpen}
        onInfoTooltipOpen={handleInfoTooltipOpen}
       />
       <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={closeAllPopups}
        onChangeForm={handleLoginOpen}
       />
    </>
  );
}

export default App;
