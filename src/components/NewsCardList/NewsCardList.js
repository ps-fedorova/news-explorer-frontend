import React from 'react';

import NewsCard from '../NewsCard/NewsCard';
import Button from '../Button/Button';

import './NewsCardList.css';

function NewsCardList(props) {
  const main = (props.pathname === '/');

  return (
    <section className="news-card-list">
      <div className="news-card-list__container">

        {main
          ? <>
            <h3 className="news-card-list__title">Результаты поиска</h3>
            <ul className="news-card-list__list">
              {props.articles.slice(0, (props.rowArticles + 1) * 3).map((card) => (
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
            </ul>
            <div className="news-card-list__button-position">
              <Button
                cardList={true}
                value="Показать еще"
                classNameTextBtn='news-card-list__button-text'
                onClick={props.handleShowMoreArticles}
              />
            </div>
          </>

          : <ul className="news-card-list__list">
            {props.articles.map((card) => (
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
