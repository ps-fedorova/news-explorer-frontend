import React from 'react';
import './NotFound.css';
import notFoundImg from '../../images/not-found.svg';

function NotFound(props) {
  return (
    <section className="not-found">
      <div className="not-found__container">
        {props.notFound && <img
          src={notFoundImg}
          alt="Лупа"
          className="not-found__image"
        />
        }
        <h2 className="not-found__title">
          {props.notFound
            ? 'Ничего не найдено'
            : 'Во время запроса произошла ошибка.'
          }
        </h2>
        <p className="not-found__text">
          {props.notFound
            ? 'К сожалению по вашему запросу ничего не найдено.'
            : 'Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          }
        </p>
      </div>
    </section>
  );
}

export default NotFound;
