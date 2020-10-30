import React from 'react';

import './NewsCard.css';

function NewsCard(props) {
  return (

    <img className="news-card"
         alt={props.card.title}
         src={props.card.urlToImage}
    />

  );
}

export default NewsCard;
