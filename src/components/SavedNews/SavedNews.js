import React from 'react';

import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function SavedNews() {
  return (
    <div className="saved-news">
       <SavedNewsHeader/>
      <NewsCardList/>
    </div>
  );
}

export default SavedNews;
