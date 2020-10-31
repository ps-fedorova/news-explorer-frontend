import React from 'react';

import articles from '../../utils/articles';
import savedNews from '../../utils/savedNews';

import NewsCard from '../NewsCard/NewsCard';
import Button from '../Button/Button';

import './NewsCardList.css';

function NewsCardList(props) {
  // const [cards, setCards] = React.useState([]);

  const main = (props.pathname === '/');

  // const title = `news-card-list__title ${main ? '' : 'news-card-list__title_hidden'}`;

  return (
    <section className="news-card-list">
      <div className="news-card-list__container">

        {main
          ? <>
            <h3 className="news-card-list__title">Результаты поиска</h3>
            <ul className="news-card-list__list">
              {/* {articles.splice(0, 3).map((card) => ( */}
              {articles.map((card) => (
                <NewsCard
                  key={card.source.id}
                  url={card.url}
                  urlToImage={card.urlToImage}
                  publishedAt={card.publishedAt}
                  title={card.title}
                  content={card.content}
                  source={card.source.name}
                />
              ))}
            </ul>
            <div className="news-card-list__button-position">
            <Button
              cardList={true}
              value="Показать еще"
              classNameTextBtn='news-card-list__button-text'
            />
            </div>
          </>

          : <ul className="news-card-list__list">
            {savedNews.map((card) => (
              <NewsCard
                key={card.source.id}
                url={card.url}
                urlToImage={card.urlToImage}
                publishedAt={card.publishedAt}
                title={card.title}
                content={card.content}
                source={card.source.name}
              />
            ))}
          </ul>}

      </div>
    </section>
  );
}

export default NewsCardList;
