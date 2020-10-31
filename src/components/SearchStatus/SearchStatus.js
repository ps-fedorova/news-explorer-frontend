import React from 'react';
import './SearchStatus.css';
import notFoundImg from '../../images/not-found.svg';

function SearchStatus() {
  const [preloader, setPreloader] = React.useState('');
  const [notFound, setNotFound] = React.useState('not-found');

  function show() {
    if (preloader === 'preloader') {
      setPreloader('');
      setNotFound('not-found');
    } else {
      setPreloader('preloader');
      setNotFound('');
    }
  }

  return (
    <section className="search-status">
      <div className={`search-status__container ${preloader}`}>
        <i className="preloader__circle" onClick={show}/>
        <p className="preloader__title">Идет поиск новостей...</p>
        <p className="preloader__helper">Нажмите на спиннер, чтобы увидеть блок "Ничего не найдено"</p>
      </div>

      <div className={`search-status__container ${notFound}`}>
        <img
          src={notFoundImg}
          alt="Лупа"
          className="not-found__image"
          onClick={show}
        />
        <h2 className="not-found__title">Ничего не найдено</h2>
        <p className="not-found__text"> К сожалению по вашему запросу ничего не найдено. </p>
        <p className="preloader__helper">Нажмите на лупу, чтобы увидеть блок со спиннером</p>
      </div>

    </section>
  );
}

export default SearchStatus;
