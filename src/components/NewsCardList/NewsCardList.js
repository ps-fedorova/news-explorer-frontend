import React from 'react';

import './NewsCardList.css';

function NewsCardList(props) {
  return (

      <img className="news-list"
           alt={props.card.title}
           src={props.card.urlToImage}
      />

  );
}

export default NewsCardList;
