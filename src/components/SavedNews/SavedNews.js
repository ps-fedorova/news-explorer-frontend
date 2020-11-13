import React from 'react';

import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function SavedNews(props) {
  return (
    <main className="saved-news">
      <SavedNewsHeader
        savedArticlesArray={props.savedArticlesArray}
      />
      {props.savedArticlesArray.length !== 0
      && <NewsCardList
        pathname={props.pathname}
        savedArticlesArray={props.savedArticlesArray}
        valueSearchInput={props.valueSearchInput}
        deleteAnArticleFromTheSavedList={props.deleteAnArticleFromTheSavedList}
      />
      }
    </main>
  );
}

export default SavedNews;
