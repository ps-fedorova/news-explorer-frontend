import React from 'react';

import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function SavedNews(props) {
  return (
    <main className="saved-news">
      <SavedNewsHeader/>
      <NewsCardList
        pathname={props.pathname}
        articles={props.articles}
      />
    </main>
  );
}

export default SavedNews;
