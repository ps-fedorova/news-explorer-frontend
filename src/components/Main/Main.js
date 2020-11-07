import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';

function Main(props) {
  const [loading, setLoading] = React.useState(false);
  const [notFound, setNotFound] = React.useState(false);
  const [valueSearchInput, setValueSearchInput] = React.useState(''); // значение инпута
  const [valueSearchInputError, setValueSearchInputError] = React.useState(false);

  return (
    <main className="main">
      <SearchForm
        setSearchResultArray={props.setSearchResultArray}
        setLoading={setLoading}
        notFound={notFound}
        setNotFound={setNotFound}
        valueSearchInput={valueSearchInput}
        setValueSearchInput={setValueSearchInput}
        setValueSearchInputError={setValueSearchInputError}
        getArticles={props.getArticles}
        setRowArticles={props.setRowArticles}
      />
      {loading && <Preloader/>}
      {notFound && <NotFound/>}
      {props.searchResultArray !== ''
      && <NewsCardList
        pathname={props.pathname}
        loggedIn={props.loggedIn}
        articles={props.articles}
        searchResultArray={props.searchResultArray}
        setNotFound={setNotFound}
        valueSearchInput={valueSearchInput}
        valueSearchInputError={valueSearchInputError}
        rowArticles={props.rowArticles}
        handleShowMoreArticles={props.handleShowMoreArticles}
      />
      }
      <About/>

    </main>
  );
}

export default Main;
