import BadRequestError from '../errors/400_BadRequestError';
import UnauthorizedError from '../errors/401_UnauthorizedError';
import { MAIN_BASE_URL, SERVER_ERROR_MESSAGE } from './config';

export const register = (email, password, name) => fetch(`${MAIN_BASE_URL}/signup`, {
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

export const authorize = (email, password) => fetch(`${MAIN_BASE_URL}/signin`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    // 'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json',
  },
  credentials: 'include',
  body: JSON.stringify({ email, password }),
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
