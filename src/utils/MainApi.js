import BadRequestError from '../errors/400_BadRequestError';
import UnauthorizedError from '../errors/401_UnauthorizedError';

// const BASE_URL = 'https://www.api.newnews.students.nomoreparties.xyz';
// const BASE_URL = 'https://www.api.newnews.students.nomoreparties.xyz';
const BASE_URL = 'http://localhost:8080';
export const SERVER_ERROR_MESSAGE = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
export const register = (email, password, name) => fetch(`${BASE_URL}/signup`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    // 'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, password, name }),
})
  .then((res) => {
    if (!res.ok) {
      return res.json();
    }
    return res.json();
  })
  .catch(() => ({
    message: SERVER_ERROR_MESSAGE,
  }));

export const authorize = (email, password) => fetch(`${BASE_URL}/signin`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    // 'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json',
  },
  credentials: 'include',
  body: JSON.stringify({ email, password }),
})
  // Коды ошибок из задания: 400 - не передано одно из полей,  401 - пользователь с email не найден
  // не соответствуют реальности. Хотя это может быть мой косяк
  .then((res) => {
    if (res.status === 400) {
      throw new BadRequestError('Данные переданы не полностью или с ошибкой');
    }
    if (res.status === 401) {
      throw new UnauthorizedError('Данные переданы не полностью или с ошибкой');
    }
    return res.json();
  })
  // eslint-disable-next-line consistent-return
  .then((data) => {
    if (data.token) {
      localStorage.setItem('jwt', data.token);
      return data.token;
    }
  });
  // .catch(() => ({
  //   message: SERVER_ERROR_MESSAGE,
  // }));

export const getUserInfo = (token) => fetch(`${BASE_URL}/users/me`, {
  method: 'GET',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})
  .then((res) => {
    if (!res.ok) {
      return res.json()
        .then((err) => {
          throw new UnauthorizedError(err.message);
        });
    }
    return res.json();
  })
  .then((data) => data);
  // .catch(() => ({
  //   message: SERVER_ERROR_MESSAGE,
  // }));
