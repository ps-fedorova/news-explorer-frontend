import React from 'react';

// import './ButtonBurgerMenu.css';
import articles from '../utils/articles';

function SavedNews() {
  // const [cards, setCards] = React.useState([]);

  return (
    <div className="saved-news">
      <div className="saved-news__container">

        {articles.map((card) => (
          <div className="card__container" key={card.source.id}>
            <img className="card"
                 alt={card.source.id}
                 src={card.urlToImage}
            />
            {console.log()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedNews;
