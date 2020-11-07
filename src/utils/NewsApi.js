// GET https://newsapi.org/v2/top-headlines?country=us&apiKey=5a8dfbd5887c4367be2a938a68940ebf
// https://nomoreparties.co/news/v2/top-headlines?country=us&apiKey=5a8dfbd5887c4367be2a938a68940ebf
const BASE_URL = 'https://nomoreparties.co/news//v2/everything?';
const API_KEY = '5a8dfbd5887c4367be2a938a68940ebf';
const PAGE_SIZE = 100;

// запрос — то, что ввёл пользователь в поиск;
// apiKey — ключ, который вы получите после регистрации;
// from — 7 дней назад от текущей даты;
// to — текущая дата;
// pageSize — максимально допустимый массив.
// Выберите 100 статей — это ограничение бесплатной версии.

export const getArticles = (searchRequest) => {
  const date = new Date();

  const currentDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

  date.setDate(date.getDate() - 7);

  const oneWeekAgoFromTheCurrentDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

  // console.log(currentDate);
  // console.log(oneWeekAgoFromTheCurrentDate);
  // 2020-11-07
  // 2020-10-31

  const URL = `${BASE_URL}`
    + `q=${searchRequest}&`
    + `apiKey=${API_KEY}&`
    + `from=${oneWeekAgoFromTheCurrentDate}&`
    + `to=${currentDate}&`
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
