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

        {/* Главная */}
        {main
          ? <>
            <h3 className="news-card-list__title">Результаты поиска</h3>
            <ul className="news-card-list__list">
              {Array.from(props.searchResultArray)
                .slice(0, arrayOfArticles)
                .map((card, key) => (
                <NewsCard
                  main={props.main}
                  key={key}
                  card={card}
                  pathname={props.pathname}
                  loggedIn={props.loggedIn}
                  addAnArticleToTheSavedList={props.addAnArticleToTheSavedList}
                  savedArticlesArray={props.savedArticlesArray}
                  valueSearchInput={props.valueSearchInput} // инпут - ключевое слово
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

        // Сохраненки
          : <ul className="news-card-list__list">
            {Array.from(props.savedArticlesArray).reverse()
              .map((cardSaved, key) => (
              <NewsCard
                key={key}
                cardSaved={cardSaved}
                pathname={props.pathname}
                loggedIn={props.loggedIn}
                deleteAnArticleFromTheSavedList={props.deleteAnArticleFromTheSavedList}
              />
              ))}
          </ul>}
      </div>
    </section>
  );
}

export default NewsCardList;
