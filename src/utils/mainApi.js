import { MAIN_BASE_URL, SERVER_ERROR_MESSAGE } from './config';

export const register = (email, password, name) => fetch(`${MAIN_BASE_URL}/signup`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
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

export const authorize = (email, password) => fetch(`${MAIN_BASE_URL}/signin`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'include',
  body: JSON.stringify({ email, password }),
}).then((res) => {
  if (!res.ok) {
    return res.json();
  }
  return res.json();
}).catch(() => ({
  message: SERVER_ERROR_MESSAGE,
}));

export const getUserInfo = (token) => fetch(`${MAIN_BASE_URL}/users/me`, {
  method: 'GET',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
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

export const getSavedArticles = () => fetch(`${MAIN_BASE_URL}/articles`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
  credentials: 'include',
});

export const postArticle = (keyword, title, text, date, source, link, image) => fetch(`${MAIN_BASE_URL}/articles`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
  credentials: 'include',
  body: JSON.stringify({
    keyword, title, text, date, source, link, image,
  }),
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

export const deleteArticle = (id) => fetch(`${MAIN_BASE_URL}/articles/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
  credentials: 'include',
});
