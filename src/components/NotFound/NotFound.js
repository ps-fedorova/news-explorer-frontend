import React from 'react';
import './NotFound.css';
import notFoundImg from '../../images/not-found.svg';

function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__container">
        <img
          src={notFoundImg}
          alt="Лупа"
          className="not-found__image"
        />
        <h2 className="not-found__title">Ничего не найдено</h2>
        <p className="not-found__text"> К сожалению по вашему запросу ничего не найдено.</p>
      </div>
    </section>
  );
}

export default NotFound;
