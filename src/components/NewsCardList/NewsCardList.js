import React from 'react';

import NewsCard from '../NewsCard/NewsCard';
import Button from '../Button/Button';

import { SERIES_OF_ARTICLES_IN_A_SINGLE_SEARCH_RESULT } from '../../utils/config';

import './NewsCardList.css';

function NewsCardList(props) {
  const main = (props.pathname === '/');

  const arrayOfArticles = props.rowArticles * SERIES_OF_ARTICLES_IN_A_SINGLE_SEARCH_RESULT;

  return (
    <section className="news-card-list">
      <div className="news-card-list__container">

        {main
          ? <>
            <h3 className="news-card-list__title">Результаты поиска</h3>
            <ul className="news-card-list__list">
              {Array.from(props.searchResultArray)
                .slice(0, arrayOfArticles)
                .map((card, key) => (
                <NewsCard
                  key={key}
                  url={card.url}
                  urlToImage={card.urlToImage}
                  publishedAt={card.publishedAt}
                  title={card.title}
                  content={card.content}
                  source={card.source.name}
                  pathname={props.pathname}
                  loggedIn={props.loggedIn}
                />
                ))}
            </ul>
            <div className="news-card-list__button-position">
              {(props.searchResultArray.length - arrayOfArticles > 0)
              && <Button
                cardList={true}
                value="Показать еще"
                classNameTextBtn='news-card-list__button-text'
                onClick={props.handleShowMoreArticles}
              />
              }
            </div>
          </>

          : <ul className="news-card-list__list">
            {props.articlesDefault.map((card) => (
              <NewsCard
                key={card.source.id}
                url={card.url}
                urlToImage={card.urlToImage}
                publishedAt={card.publishedAt}
                title={card.title}
                content={card.content}
                source={card.source.name}
                pathname={props.pathname}
                loggedIn={props.loggedIn}
              />
            ))}
          </ul>}
      </div>
    </section>
  );
}

export default NewsCardList;
