import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import SearchStatus from '../SearchStatus/SearchStatus';

function Main() {
  return (
    <main className="main">
      <SearchForm/>
      <SearchStatus/>
      <About/>

    </main>
  );
}

export default Main;
