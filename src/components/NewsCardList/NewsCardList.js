import React from 'react';

import articles from '../../utils/articles';

import NewsCard from '../NewsCard/NewsCard';

import './NewsCardList.css';

function NewsCardList() {
  // const [cards, setCards] = React.useState([]);

  return (
    <section className="news-card-list">
      <ul className="news-card-list__container">
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
    </section>
  );
}

export default NewsCardList;
