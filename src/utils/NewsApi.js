// GET https://newsapi.org/v2/top-headlines?country=us&apiKey=5a8dfbd5887c4367be2a938a68940ebf
// https://nomoreparties.co/news/v2/top-headlines?country=us&apiKey=5a8dfbd5887c4367be2a938a68940ebf

import {
  NEWS_BASE_URL,
  NEWS_API_KEY,
  PAGE_SIZE,
  CURRENT_DATE,
  ONE_WEEK_AGO_FROM_THE_CURRENT_DATE,
} from './config';

// запрос — то, что ввёл пользователь в поиск;
// apiKey — ключ, который вы получите после регистрации;
// from — 7 дней назад от текущей даты;
// to — текущая дата;
// pageSize — максимально допустимый массив.
// Выберите 100 статей — это ограничение бесплатной версии.

export const getArticles = (searchRequest) => {
  const URL = `${NEWS_BASE_URL}?`
    + `q=${searchRequest}&`
    + `apiKey=${NEWS_API_KEY}&`
    + `from=${ONE_WEEK_AGO_FROM_THE_CURRENT_DATE}&`
    + `to=${CURRENT_DATE}&`
    + `pageSize=${PAGE_SIZE}`;

  return fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`Ну вот, все пропало (Ошибка: ${res.status})`));
    });
};
