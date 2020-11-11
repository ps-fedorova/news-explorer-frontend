export const SERVER_ERROR_MESSAGE = 'Во время запроса произошла ошибка. '
  + 'Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

export const NEWS_BASE_URL = 'https://nomoreparties.co';
export const NEWS_API_KEY = '5a8dfbd5887c4367be2a938a68940ebf';

export const MAIN_BASE_URL = 'http://localhost:8080';

// количество статей в одной выдаче
export const SERIES_OF_ARTICLES_IN_A_SINGLE_SEARCH_RESULT = 3;

// доступный массив статей
export const PAGE_SIZE = 100;

// дата
const locales = 'sv'; // 2020-11-11
const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
const week = 7 * 24 * 60 * 60 * 1000;

export const CURRENT_DATE = new Intl.DateTimeFormat(locales, options)
  .format(Date.now());

export const ONE_WEEK_AGO_FROM_THE_CURRENT_DATE = new Intl.DateTimeFormat(locales, options)
  .format(Date.now() - week);

// Время до исчезания надписи "Нужно ввести ключевое слово"
export const TIME_IN_SEC_DISPLAY_EMPTY_SEARCH = 5;

// const locales = [
//   'cs',
//   'cs-CZ',
//   'en-001',
//   'en-150',
//   'en-TV',
//   'es-419',
//   'es-AR',
//   'fil',
//   'fr-CA',
//   'id',
//   'in',
//   'lt',
//   'nl',
//   'pl',
//   'pt-PT',
//   'sr-ME',
//   'sv',
//   'uk',
//   'vi',
// ];

// locales.forEach((item) => {
//   console.log(new Intl.DateTimeFormat(item, options).format(Date.now()));
// });
