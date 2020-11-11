import React from 'react';
import {
  Route, Switch, useLocation, useHistory,
} from 'react-router-dom';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import Login from '../Popups/Login/Login';
import Register from '../Popups/Register/Register';
import InfoTooltip from '../Popups/InfoTooltip/InfoTooltip';
import articles from '../../utils/articles';
import { getArticles } from '../../utils/NewsApi';
import * as mainApi from '../../utils/MainApi';

import '../../vendor/normalize.css';
import '../../vendor/fonts.css';
import './App.css';
import useFormWithValidation from '../../utils/useFormWithValidation';

function App() {
  const { pathname } = useLocation();
  const history = useHistory();
  const SERVER_ERROR_MESSAGE = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState('');
  const { setIsValid, isValid, resetForm } = useFormWithValidation();
  // попапы
  const [isLoginOpen, setLoginOpen] = React.useState(false);
  const [isRegisterOpen, setRegisterOpen] = React.useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);

  // регистрация
  const [authError, setAuthError] = React.useState('');

  const [searchResultArray, setSearchResultArray] = React.useState('');
  const [rowArticles, setRowArticles] = React.useState(3);

  // открытие попапов
  function handleLoginOpen() {
    setLoginOpen(true);
    setRegisterOpen(false);
    setInfoTooltipOpen(false);
    setAuthError('');
  }

  function handleRegisterOpen() {
    setLoginOpen(false);
    setRegisterOpen(true);
    setAuthError('');
  }

  function handleInfoTooltipOpen() {
    setRegisterOpen(false);
    setLoginOpen(true);
    setAuthError('');
  }

  function closeAllPopups() {
    setLoginOpen(false);
    setRegisterOpen(false);
    setInfoTooltipOpen(false);
    setAuthError('');
  }

  function handleEsc(evt) {
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  });

  // Регистрация / авторизация / выход
  // Взять куку, если есть
  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    console.log(jwt);
    if (jwt) {
      mainApi.getUserInfo(jwt)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res.name);
          console.log(res.name);
          console.log(res.name);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  // Регистрация;
  // function handleRegister(emailUser, passwordUser, nameUser) {
  //   setAuthError('');
  //   mainApi.register(emailUser, passwordUser, nameUser)
  //     .then((res) => {
  //       console.log(res);
  //       setRegisterOpen(false);
  //       setInfoTooltipOpen(true);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //       console.log(';jgf');
  //       setAuthError(err.message);
  //     });
  // }

  function handleRegister(emailUser, passwordUser, nameUser) {
    setAuthError('');
    mainApi.register(emailUser, passwordUser, nameUser)
      .then((res) => {
        if (res.name) {
          setRegisterOpen(false);
          setInfoTooltipOpen(true);
          console.log(res);
        } else {
          setAuthError(res.message);
          // setIsValid(false);
          console.log(isValid);
        } // catch в MainApi.js
      });
  }

  // Авторизация
  function handleLogin(emailUser, passwordUser) {
    setAuthError('');
    mainApi.authorize(emailUser, passwordUser)
      .then((data) => {
        mainApi.getUserInfo(data)
          .then((res) => {
            setCurrentUser(res.name);
            setLoggedIn(true);
            setLoginOpen(false);
          })
          .catch((err) => {
            console.log(err);
            setAuthError(err.message);
          });
        console.log(data);
        setAuthError(data.message);
      })
      .catch((err) => {
        console.log('err.message');
        setAuthError('err.message');
      });
  }
  // Получить информацию о пользователе

  // Выход
  function handleSignOut() {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    setCurrentUser('');
    history.push('/');
  }

  function handleAuthButton() {
    if (loggedIn) {
      handleSignOut();
    } else {
      handleLoginOpen();
    }
  }

  // статьи
  function handleShowMoreArticles() {
    setRowArticles(rowArticles + 3);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header
        pathname={pathname}
        loggedIn={loggedIn}
        onClick={handleAuthButton}
      />
      <Switch>

        <Route exact path="/">{/* Главная */}
          <Main
            articles={articles}
            getArticles={getArticles}
            pathname={pathname}
            loggedIn={loggedIn}
            rowArticles={rowArticles}
            setRowArticles={setRowArticles}
            handleShowMoreArticles={handleShowMoreArticles}
            searchResultArray={searchResultArray}
            setSearchResultArray={setSearchResultArray}
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
        handleLogin={handleLogin}
        authError={authError}
      />
      <Register
        isOpen={isRegisterOpen}
        onClose={closeAllPopups}
        onChangeForm={handleLoginOpen}
        onInfoTooltipOpen={handleInfoTooltipOpen}
        handleRegister={handleRegister}
        authError={authError}
      />
      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={closeAllPopups}
        onChangeForm={handleLoginOpen}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
