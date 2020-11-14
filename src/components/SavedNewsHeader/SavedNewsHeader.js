import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { declOfNum } from '../../utils/declOfNum';
import './SavedNewsHeader.css';

function SavedNewsHeader(props) {
  const currentUser = React.useContext(CurrentUserContext);

  function displayKeywords() {
    let result = '';

    const keywords = props.savedArticlesArray.map((art) => art.keyword)
      .reduce((acc, key) => {
        acc[key] = acc[key] === undefined ? 1 : acc[key] += 1;
        return acc;
      }, {});

    const sortedKey = Object.keys(keywords).reverse()
      .map((key) => [key, keywords[key]])
      .sort((a, b) => b[1] - a[1])
      .map((item) => item[0]);

    if (sortedKey.length === 1) {
      result = <span className="saved-news-header__text saved-news-header__text_bold">
        {sortedKey[0]}
        </span>;
    } else if (sortedKey.length === 2) {
      result = <>
        <span className="saved-news-header__text saved-news-header__text_bold">
        {sortedKey[0]}</span>
        &nbsp;и&nbsp;
        <span className="saved-news-header__text saved-news-header__text_bold">
          {sortedKey[1]}
          </span>
      </>;
    } else if (sortedKey.length === 3) {
      result = <>
        <span className="saved-news-header__text saved-news-header__text_bold">
        {sortedKey[0]}, {sortedKey[1]}</span>
        &nbsp;и&nbsp;
        <span className="saved-news-header__text saved-news-header__text_bold">
          {sortedKey[2]}
          </span>
      </>;
    } else {
      result = <>
        <span className="saved-news-header__text saved-news-header__text_bold">
        {sortedKey[0]}, {sortedKey[1]}</span>
        &nbsp;и&nbsp;
        <span className="saved-news-header__text saved-news-header__text_bold">
          {sortedKey.length - 2}-м другим
          </span>
      </>;
    }
    return result;
  }

  const savedText = declOfNum(props.savedArticlesArray.length,
    ['сохранённая статья', 'сохранённые статьи', 'сохранённых статей']);

  return (
    <section className="saved-news-header">
      <h1 className="saved-news-header__title">Сохранённые статьи</h1>
      <h2 className="saved-news-header__subtitle">
        <span className="saved-news-header__subtitle-text">
          {currentUser}, у&nbsp;вас {
          `${props.savedArticlesArray.length === 0 ? 'ещё нет' : props.savedArticlesArray.length}`} {savedText}
        </span>
      </h2>
      {props.savedArticlesArray.length !== 0
      && < p className="saved-news-header__text">
        По ключевым словам:&nbsp;{displayKeywords()}
      </p>
      }
    </section>
  );
}
export default SavedNewsHeader;
