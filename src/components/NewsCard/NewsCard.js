import React from 'react';

import './NewsCard.css';
import Link from '../Link/Link';

function NewsCard(props) {
  const keyword = 'Ключевое слово123456789';

  const options = {
    month: 'long',
    day: 'numeric',
  };
  const date = new Date(props.publishedAt);
  const fullDate = `${date.toLocaleString('ru', options)}, ${date.getFullYear()}`;

  return (
    <li className="news-card">
      <a title="Открыть статью в новой вкладке" href={props.url} className="link news-card__link-img" target="_blank">
        <img className="news-card__image"
             src={props.urlToImage}
             alt={props.title}
          // onClick={handleZoomClick}
        />
      </a>
      <div className="news-card__items-in-img news-card__keyword-container">
        <p title={keyword} className="news-card__keyword">{keyword}</p>
      </div>
      <div className="news-card__image-container">
        <button className="news-card__items-in-img news-card__mark"/>
        <p className="news-card__items-in-img news-card__notice">Убрать из сохранённых</p>
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
