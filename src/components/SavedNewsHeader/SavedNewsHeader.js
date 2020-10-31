import React from 'react';

import './SavedNewsHeader.css';

function SavedNewsHeader() {
  return (
    <section className="saved-news-header">
      <h1 className="saved-news-header__title">Сохраненные статьи</h1>
      <h2 className="saved-news-header__subtitle">
        <span className="saved-news-header__subtitle-text"> Грета, у вас <span className="saved-news-header__subtitle-count">5</span></span>
        <span className="saved-news-header__subtitle-text-br">сохранённых статей</span>
      </h2>
      <p className="saved-news-header__text saved-news-header__text">
        По ключевым словам:&nbsp;
        <span className="saved-news-header__text saved-news-header__text_bold">Природа, Тайга</span>
        &nbsp;и&nbsp;
        <span className="saved-news-header__text saved-news-header__text_bold">2&#8209;м&nbsp;другим</span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;
