import React from 'react';
import {
  Route, Switch, useLocation, Redirect, useHistory,
} from 'react-router-dom';

import '../../vendor/normalize.css';
import '../../vendor/fonts.css';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Switch>

        <Route exact path="/">{/* Главная */}
          <Main/>
        </Route>

        <Route path="/saved-news"> {/* Сохраненные новости */}
          {/* <SavedNews/> */}
        </Route>

      </Switch>
      <Footer/>
    </>
  );
}

export default App;
