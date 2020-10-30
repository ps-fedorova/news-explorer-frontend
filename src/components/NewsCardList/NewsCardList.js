import React from 'react';

import articles from '../../utils/articles';

import NewsCard from '../NewsCard/NewsCard';

import './NewsCardList.css';

function NewsCardList() {
  // const [cards, setCards] = React.useState([]);

  return (
    <div className="news-card-list">
      {articles.map((card) => (
        <div className="news-card-list__container" key={card.source.id}>
          <NewsCard
            card={card}
          />
        </div>
      ))}
    </div>
  );
}

export default NewsCardList;
