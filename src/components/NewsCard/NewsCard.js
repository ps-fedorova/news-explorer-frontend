import React from 'react';
import './NewsCard.css';

function NewsCard(props) {
  const date = new Date(props.main ? props.card.publishedAt : props.cardSaved.date);
  const fullDate = `${date.toLocaleString('ru', {
    day: 'numeric',
    month: 'long',
  })}, ${date.getFullYear()}`;

  function handleCardSavedClick() {
    props.addAnArticleToTheSavedList({
      keyword: props.valueSearchInput,
      title: props.card.title,
      text: props.card.description,
      date: props.card.publishedAt,
      source: props.card.source.name,
      link: props.card.url,
      image: props.card.urlToImage,
    });
  }

  function deleteAnArticleFromTheSavedList() {
    props.deleteAnArticleFromTheSavedList(props.cardSaved);
  }

  function displayMark() {
    if (props.loggedIn && (props.pathname === '/')) {
      return (
        <>
          <button
            className={
              `news-card__items-in-img news-card__mark
            ${!(props.savedArticlesArray.some((i) => i.title === props.card.title))
                ? 'news-card__mark_type_save'
                : 'news-card__mark_type_saved'}`
            }
            onClick={handleCardSavedClick}
          />
        </>
      );
    }
    if (!props.loggedIn && (props.pathname === '/')) {
      return (
        <>
          <button
            className="news-card__items-in-img news-card__mark news-card__mark_type_save"
            onClick={props.addAnArticleToTheSavedList}
          />
          <p className="news-card__items-in-img news-card__notice news-card__notice_main">
            Войдите, чтобы сохранять статьи
          </p>
        </>
      );
    }
    // if (props.pathname === '/saved-news') {
    return (
      <>
        <button
          className="news-card__items-in-img news-card__mark news-card__mark_type_trashcan"
          onClick={deleteAnArticleFromTheSavedList}
        />
        <p className="news-card__items-in-img news-card__notice">Убрать из сохранённых</p>
      </>
    );
    // }
  }

  /// ////////////////
  return (
    <li className="news-card">
      <a title="Открыть статью в новой вкладке" href={props.main ? props.card.url : props.cardSaved.link}
         className="link news-card__link-img" target="_blank"
         rel='noopener noreferrer'>
        <img className="news-card__image"
             src={props.main ? props.card.urlToImage : props.cardSaved.image}
             alt={props.main ? props.card.title : props.cardSaved.title}
        />
      </a>

      {
        (props.pathname === '/')
          ? <></>
          : < div className="news-card__items-in-img news-card__keyword-container">
            <p title={props.cardSaved.keyword} className="news-card__keyword">{props.cardSaved.keyword}</p>
          </div>
      }

      <div className="news-card__image-container">
        <>{displayMark()}</>
      </div>

      <div className="news-card__text-container">
        <span className="news-card__date">{fullDate}</span>
        <a
          title="Открыть статью в новой вкладке"
          className="news-card__link"
          href={props.main ? props.card.url : props.cardSaved.link}
          target="_blank"
          rel='noopener noreferrer'>
          <h3 className="news-card__title">{props.main ? props.card.title : props.cardSaved.title}</h3>
        </a>
        <p className="news-card__content">{props.main ? props.card.description : props.cardSaved.text}</p>
        <span className="news-card__source">{props.main ? props.card.source.name : props.cardSaved.source}</span>
      </div>
    </li>
  );
}

export default NewsCard;
