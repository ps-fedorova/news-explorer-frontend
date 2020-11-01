import React from 'react';
import {
  Route, Switch, useLocation, Redirect, useHistory,
} from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';

import articles from '../../utils/articles';

import '../../vendor/normalize.css';
import '../../vendor/fonts.css';
import './App.css';

function App() {
  const { pathname } = useLocation();
  const [rowArticles, setRowArticles] = React.useState(0);
  const isLoading = false;
  const loggedIn = true;

  function handleShowMoreArticles() {
    setRowArticles(rowArticles + 1);
  }

  return (
    <>
      <Header
        pathname={pathname}
        loggedIn={loggedIn}
      />
      <Switch>

        <Route exact path="/">{/* Главная */}
          <Main
            articles={articles}
            pathname={pathname}
            loggedIn={loggedIn}
            isLoading={isLoading}
            handleShowMoreArticles={handleShowMoreArticles} // иначе стейт при смене страницы обнулится
            rowArticles={rowArticles} // иначе стейт при смене страницы обнулится
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
    </>
  );
}

export default App;
