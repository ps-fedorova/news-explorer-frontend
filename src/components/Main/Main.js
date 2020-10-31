import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import SearchStatus from '../SearchStatus/SearchStatus';
import NewsCardList from '../NewsCardList/NewsCardList';

function Main(props) {
  return (
    <main className="main">
      <SearchForm/>
      <SearchStatus/>
      <NewsCardList
        pathname={props.pathname}
      />
      <About/>

    </main>
  );
}

export default Main;
