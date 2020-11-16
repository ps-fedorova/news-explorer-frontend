import React from 'react';
import {
  Route, Switch, useLocation, useHistory, Redirect,
} from 'react-router-dom';

import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import Login from '../Popups/Login/Login';
import Register from '../Popups/Register/Register';
import InfoTooltip from '../Popups/InfoTooltip/InfoTooltip';
import { getArticles } from '../../utils/newsApi';
import * as mainApi from '../../utils/mainApi';

import '../../vendor/normalize.css';
import '../../vendor/fonts.css';
import './App.css';

function App() {
  const { pathname } = useLocation();
  const history = useHistory();

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState('');
  const [disabled, setDisabled] = React.useState(false);

  // попапы
  const [isLoginOpen, setLoginOpen] = React.useState(false);
  const [isRegisterOpen, setRegisterOpen] = React.useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);

  // мобильное меню
  const [classBurgerMenu, setClassBurgerMenu] = React.useState('');
  const [isShowMenu, setIsShowMenu] = React.useState('');
  const [isShowOverlay, setIsShowOverlay] = React.useState('');
  const [isMenuMobile, setMenuMobile] = React.useState(false);

  // ошибка регистрации
  const [authError, setAuthError] = React.useState('');

  // статьи
  const [searchResultArray, setSearchResultArray] = React.useState([]); // статьи из поиска
  const [savedArticlesArray, setSavedArticlesArray] = React.useState([]); // сохраненные статьи
  const [rowArticles, setRowArticles] = React.useState(1); // штук в ряд
  const [loading, setLoading] = React.useState(false);
  const [notFound, setNotFound] = React.useState(false);
  const [isSearchError, setSearchError] = React.useState(false); // сервер со статьями отвалился
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
      setMenuMobile(true);
    } else {
      setIsShowMenu('');
      setMenuMobile(false);
    }
  }

  // Регистрация / авторизация / выход

  // Загрузить сохраненные статьи
  function getSavedArticles() {
    mainApi.getSavedArticles()
      .then((res) => res.json())
      .then((news) => {
        setSavedArticlesArray(news.data);
      })
      .catch((err) => console.log(err));
  }

  // Взять куку, если есть
  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.getUserInfo(jwt)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res.name);
          getSavedArticles();
        })
        .catch((err) => console.log(err));
    }
  }, []);

  // Регистрация;
  function handleRegister(emailUser, passwordUser, nameUser) {
    setDisabled(true);
    setAuthError('');
    mainApi.register(emailUser, passwordUser, nameUser)
      .then((res) => {
        if (res.name) {
          setRegisterOpen(false);
          setInfoTooltipOpen(true);
        } else {
          setAuthError(res.message);
        }
      })
      .finally(() => setDisabled(false));
  }

  // Авторизация
  function handleLogin(email, password) {
    setDisabled(true);
    setAuthError('');
    mainApi.authorize(email, escape(password))
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          //
          mainApi.getUserInfo(data)
            .then((res) => {
              if (res.name) {
                setLoggedIn(true);
                setCurrentUser(res.name);
                setLoginOpen(false);
                getSavedArticles();
              } else {
                setAuthError(res.message);
              } // catch в mainApi.js
            });
          //
        } else {
          setAuthError(data.message);
        } // catch в mainApi.js
      })
      .finally(() => setDisabled(false));
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
    if (classBurgerMenu === 'button-burger-menu_open') {
      showMenu();
    }
    if (loggedIn) {
      handleSignOut();
    } else {
      handleLoginOpen();
    }
  }

  // статьи

  // Найти статьи
  function getArticlesFromAPI() {
    setDisabled(true);
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
        setSearchError(true);
      })
      .finally(() => {
        setLoading(false);
        setDisabled(false);
      });
  }

  function handleNewsSearch() {
    setSearchResultArray([]);
    setNotFound(false);
    setValueSearchInputError(false);
    setLoading(true);
    setRowArticles(1);
    getArticlesFromAPI();
  }

  // Показать еще статьи
  function handleShowMoreArticles() {
    setRowArticles(rowArticles + 1);
  }

  // Убрать статью из сохранёнок
  function deleteAnArticleFromTheSavedList(data) {
    mainApi.deleteArticle(data._id)
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        return res.json();
      })
      .then((newCard) => setSavedArticlesArray(savedArticlesArray
        .filter((item) => (item._id === data._id ? !newCard : item))))
      .catch((err) => console.log(`Ошибка при удалении карточки: ${err}`));
  }

  // Добавить статью в сохраненки (Функция для главной страницы)
  function addAnArticleToTheSavedList(article) {
    if (!loggedIn) {
      handleRegisterOpen();
    } else {
      const saved = savedArticlesArray
        .find((i) => i.title === article.title
          && i.date === article.date
          && i.source === article.source);
      if (!saved) {
        mainApi.postArticle(
          valueSearchInput,
          article.title || ' ',
          article.text || ' ',
          article.date || ' ',
          article.source || ' ',
          article.link || 'https://www.fed.students.nomoreparties.xyz',
          article.image || 'https://media.menacatalyst.ps/cached_uploads/resize/400/500/default-image.jpg',
        )
          .then((newArticle) => {
            if (newArticle.data) {
              setSavedArticlesArray([...savedArticlesArray, newArticle.data]);
            } else {
              console.log('Статья не сохранилась');
            }
          })
          .catch((err) => console.log(`Статья не сохранилась. Ошибка: ${err}`));
        return;
      }
      deleteAnArticleFromTheSavedList(saved);
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header
        pathname={pathname}
        loggedIn={loggedIn}
        onClick={handleAuthButton}
        showMenu={showMenu}
        isShowMenu={isShowMenu}
        isShowOverlay={isShowOverlay}
        isMenuMobile={isMenuMobile}
        classBurgerMenu={classBurgerMenu}
      />
      <Switch>

        <Route exact path="/">
          <Main
            disabled={disabled}
            loading={loading}
            setLoading={setLoading}
            notFound={notFound}
            setNotFound={setNotFound}
            isSearchError={isSearchError}
            pathname={pathname}
            loggedIn={loggedIn}
            rowArticles={rowArticles}
            handleShowMoreArticles={handleShowMoreArticles}
            handleNewsSearch={handleNewsSearch}
            addAnArticleToTheSavedList={addAnArticleToTheSavedList}
            searchResultArray={searchResultArray}
            valueSearchInput={valueSearchInput}
            valueSearchInputError={valueSearchInputError}
            setValueSearchInput={setValueSearchInput}
            setValueSearchInputError={setValueSearchInputError}
            savedArticlesArray={savedArticlesArray}
          />
        </Route>

        <ProtectedRoute
            path="/saved-news"
            component={SavedNews}
            setLoginOpen={setLoginOpen}
            savedArticlesArray={savedArticlesArray}
            pathname={pathname}
            loggedIn={loggedIn}
            valueSearchInput={valueSearchInput}
            deleteAnArticleFromTheSavedList={deleteAnArticleFromTheSavedList}
        />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer/>
      <Login
        isOpen={isLoginOpen}
        onClose={closeAllPopups}
        onChangeForm={handleRegisterOpen}
        handleLogin={handleLogin}
        authError={authError}
        disabled={disabled}
      />
      <Register
        isOpen={isRegisterOpen}
        onClose={closeAllPopups}
        onChangeForm={handleLoginOpen}
        onInfoTooltipOpen={handleInfoTooltipOpen}
        handleRegister={handleRegister}
        authError={authError}
        disabled={disabled}
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
