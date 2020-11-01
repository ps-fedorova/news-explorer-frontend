import React from 'react';
import './SearchForm.css';
import Button from '../Button/Button';

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__container">
         <h1 className="search-form__title">Что творится в мире?</h1>
         <p className="search-form__subtitle">
          Находите самые свежие статьи на любую тему и сохраняйте в своём личном
          кабинете.
         </p>

         <div className="search-form__input-container">
          <input
            title="Введите запрос"
            type="text"
            className="search-form__input"
            placeholder="Введите тему новости"
          />
          <Button
            searchForm={true}
            value="Искать"
            className="search-form__button"
          />
         </div>
      </div>
    </section>
  );
}

export default SearchForm;

// Задан пустой поисковый запрос
