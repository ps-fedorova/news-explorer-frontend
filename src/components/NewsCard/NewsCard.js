import React from 'react';
import './NewsCard.css';

function NewsCard(props) {
  const keyword = 'Ключевое слово123456789';

  const options = {
    month: 'long',
    day: 'numeric',
  };
  const date = new Date(props.publishedAt);
  const fullDate = `${date.toLocaleString('ru', options)}, ${date.getFullYear()}`;

  function displayMark() {
    if (props.loggedIn && (props.pathname === '/')) {
      return (
        <>
          <button className="news-card__items-in-img news-card__mark news-card__mark_type_save"/>
        </>
      );
    }
    if (!props.loggedIn && (props.pathname === '/')) {
      return (
        <>
          <button className="news-card__items-in-img news-card__mark news-card__mark_type_save"/>
          <p className="news-card__items-in-img news-card__notice news-card__notice_main">Войдите, чтобы сохранять статьи</p>
        </>
      );
    }
    // if (props.pathname === '/saved-news') {
    return (
      <>
        <button className="news-card__items-in-img news-card__mark news-card__mark_type_trashcan"/>
        <p className="news-card__items-in-img news-card__notice">Убрать из сохранённых</p>
      </>
    );
    // }
  }

  return (
    <li className="news-card">
      <a title="Открыть статью в новой вкладке" href={props.url} className="link news-card__link-img" target="_blank">
        <img className="news-card__image"
             src={props.urlToImage}
             alt={props.title}
        />
      </a>

      {
        (props.pathname === '/')
          ? <></>
          : < div className="news-card__items-in-img news-card__keyword-container">
            <p title={keyword} className="news-card__keyword">{keyword}</p>
          </div>
      }

      <div className="news-card__image-container">
        <>{displayMark()}</>
      </div>

      <div className="news-card__text-container">
        <span className="news-card__date">{fullDate}</span>
        <a title="Открыть статью в новой вкладке" className="news-card__link" href={props.url} target="_blank">
          <h3 className="news-card__title">{props.title}</h3>
        </a>
        <p className="news-card__content">{props.content}</p>
        <span className="news-card__source">{props.source}</span>
      </div>
    </li>
  );
}

export default NewsCard;
