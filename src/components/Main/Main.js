import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import './Main.css';

function Main(props) {
  return (
    <main className="main">
      <SearchForm
        disabled={props.disabled}
        setLoading={props.setLoading}
        notFound={props.notFound}
        setNotFound={props.setNotFound}
        handleNewsSearch={props.handleNewsSearch}
        valueSearchInput={props.valueSearchInput}
        setValueSearchInput={props.setValueSearchInput}
        setValueSearchInputError={props.setValueSearchInputError}
      />
      {props.loading && <Preloader/>}
      {(props.notFound || props.isSearchError)
      && <NotFound
        notFound={props.notFound}
      />}
      {props.searchResultArray.length !== 0
      && <NewsCardList
        main={true}
        pathname={props.pathname}
        loggedIn={props.loggedIn}
        // articlesDefault={props.articlesDefault}
        searchResultArray={props.searchResultArray}
        setNotFound={props.setNotFound}
        valueSearchInput={props.valueSearchInput}
        valueSearchInputError={props.valueSearchInputError}
        rowArticles={props.rowArticles}
        handleShowMoreArticles={props.handleShowMoreArticles}
        addAnArticleToTheSavedList={props.addAnArticleToTheSavedList}
        savedArticlesArray={props.savedArticlesArray}
      />
      }
      <About/>

    </main>
  );
}

export default Main;
