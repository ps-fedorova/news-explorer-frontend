import React from 'react';

import articles from '../../utils/articles';

import NewsCardList from '../NewsCardList/NewsCardList';

import './SavedNews.css';

function SavedNews() {
  // const [cards, setCards] = React.useState([]);

  return (
    <div className="news">
      {articles.map((card) => (
        <div className="news__container" key={card.source.id}>
          <NewsCardList
            card={card}
          />
        </div>
      ))}
    </div>
  );
}

export default SavedNews;
