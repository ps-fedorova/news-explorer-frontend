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
import articlesDefault from '../../utils/articles';
import { getArticles } from '../../utils/NewsApi';
import * as mainApi from '../../utils/MainApi';

import '../../vendor/normalize.css';
import '../../vendor/fonts.css';
import './App.css';

function App() {
  const { pathname } = useLocation();
  const history = useHistory();

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState('');

  // попапы
  const [isLoginOpen, setLoginOpen] = React.useState(false);
  const [isRegisterOpen, setRegisterOpen] = React.useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);

  // ошибка регистрации
  const [authError, setAuthError] = React.useState('');

  // статьи
  const [searchResultArray, setSearchResultArray] = React.useState(''); // начальное состояние выдачи
  const [rowArticles, setRowArticles] = React.useState(1); // штук в ряд
  const [loading, setLoading] = React.useState(false);
  const [notFound, setNotFound] = React.useState(false);
  const [valueSearchInput, setValueSearchInput] = React.useState(''); // значение инпута
  const [valueSearchInputError, setValueSearchInputError] = React.useState(false);

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

  /// ///////////////////////////////////////////////////////////////////
  // Регистрация / авторизация / выход

  // Взять куку, если есть
  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.getUserInfo(jwt)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res.name);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  // Регистрация;
  function handleRegister(emailUser, passwordUser, nameUser) {
    setAuthError('');
    mainApi.register(emailUser, passwordUser, nameUser)
      .then((res) => {
        if (res.name) {
          setRegisterOpen(false);
          setInfoTooltipOpen(true);
        } else {
          setAuthError(res.message);
        } // catch в MainApi.js
      });
  }

  // Авторизация
  function handleLogin(email, password) {
    setAuthError('');
    mainApi.authorize(email, escape(password))
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          setLoggedIn(true);
          setLoginOpen(false);
          //
          mainApi.getUserInfo(data)
            .then((res) => {
              if (res.name) {
                setCurrentUser(res.name);
              } else {
                setAuthError(res.message);
              }// catch в MainApi.js
            });
          //
        } else {
          setAuthError(data.message);
        } // catch в MainApi.js
      });
  }

  // Выход
  function handleSignOut() {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    setCurrentUser('');
    history.push('/');
  }

  // Переключить кнопку при выходе/входе
  function handleAuthButton() {
    if (loggedIn) {
      handleSignOut();
    } else {
      handleLoginOpen();
    }
  }

  // статьи
  function handleNewsSearch() {
    setSearchResultArray('');
    setNotFound(false);
    setValueSearchInputError(false);
    setLoading(true);
    setRowArticles(1);
    getArticles(valueSearchInput)
      .then((data) => {
        if (data.articles.length !== 0) {
          setSearchResultArray(data.articles);
        } else {
          setNotFound(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setValueSearchInputError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  // Показать еще статьи
  function handleShowMoreArticles() {
    setRowArticles(rowArticles + 1);
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
            articlesDefault={articlesDefault}
            loading={loading}
            setLoading={setLoading}
            notFound={notFound}
            setNotFound={setNotFound}
            pathname={pathname}
            loggedIn={loggedIn}
            rowArticles={rowArticles}
            handleShowMoreArticles={handleShowMoreArticles}
            handleNewsSearch={handleNewsSearch}
            searchResultArray={searchResultArray}
            setSearchResultArray={setSearchResultArray}
            valueSearchInput={valueSearchInput}
            valueSearchInputError={valueSearchInputError}
            setValueSearchInput={setValueSearchInput}
            setValueSearchInputError={setValueSearchInputError}
          />
        </Route>

        <Route path="/saved-news"> {/* Сохраненные новости */}
          <SavedNews
            articlesDefault={articlesDefault} // чтобы считать количество новостей
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
