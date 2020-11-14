import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import './SavedNews.css';

function SavedNews(props) {
  return (
    <main className="saved-news">
      <SavedNewsHeader
        savedArticlesArray={props.savedArticlesArray}
        loggedIn={props.loggedIn}
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
