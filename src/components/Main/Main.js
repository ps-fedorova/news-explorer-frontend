import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';

function Main(props) {
  function showResult() {
    if (props.articles.length) {
      return (
        <NewsCardList
          pathname={props.pathname}
          handleShowMoreArticles={props.handleShowMoreArticles}
          rowArticles={props.rowArticles}
          articles={props.articles}
        />
      );
    }
    return <NotFound/>;
  }

  return (
    <main className="main">
      <SearchForm/>
      {
        props.isLoading
          ? <Preloader/>
          : <>{showResult()}</>
      }
      <About/>

    </main>
  );
}

export default Main;
