import React from 'react';
import './SearchForm.css';
import Button from '../Button/Button';

import { TIME_IN_SEC_DISPLAY_EMPTY_SEARCH } from '../../utils/config';

function SearchForm(props) {
  const [isSubmitted, setIsSubmitted] = React.useState(false); // нажата кнопка?
  // введенные данные валидны?
  const [isSearchInputValid, setIsSearchInputValid] = React.useState(false);
  const [classError, setClassError] = React.useState(''); // состояние ошибки

  // Следующая дикая конструкция нужна чтобы предупреждение исчезало через 5 секунд
  const [timer, setTimer] = React.useState(0);

  const id = React.useRef(0);
  const clear = () => {
    window.clearInterval(id.current);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, [isSubmitted]);

  React.useEffect(() => {
    if (timer === 0 || isSubmitted === false) {
      clear();
      setIsSubmitted(false);
      setClassError('');
      setIsSearchInputValid(false);
    }
  }, [timer, isSubmitted]);

  // инпут
  function handleValueInputSearchChange(evt) {
    props.setValueSearchInput(evt.target.value.trimStart());
    setIsSubmitted(false);
    if (!evt.target.validity.valid) {
      setIsSearchInputValid(false);
    } else {
      setIsSearchInputValid(true);
    }
  }

  // кнопка
  function handleSubmit(evt) {
    evt.preventDefault();
    props.setRowArticles(1);
    setIsSubmitted(true);
    setTimer(timer + TIME_IN_SEC_DISPLAY_EMPTY_SEARCH);

    if (!isSearchInputValid && props.valueSearchInput === '') {
      setClassError('search-form__error_open');
    } else {
      setClassError({
        classError: '',
      });
      props.setSearchResultArray('');
      props.setNotFound(false);
      props.setValueSearchInputError(false);
      props.setLoading(true);

      props.getArticles(props.valueSearchInput)
        .then((data) => {
          if (data.articles.length !== 0) {
            props.setSearchResultArray(data.articles);
          } else {
            props.setNotFound(true);
          }
        })
        .catch((err) => {
          console.log(err);
          props.setValueSearchInputError(true);
        })
        .finally(() => {
          props.setLoading(false);
        });
    }
  }

  return (
    <section className="search-form">
      <div className="search-form__container">
        <h1 className="search-form__title">Что творится в мире?</h1>
        <p className="search-form__subtitle">
          Находите самые свежие статьи на любую тему и сохраняйте в своём личном
          кабинете.
        </p>

        <div className="search-form__input-container">
          <input
            title="Введите запрос"
            type="text"
            className="search-form__input"
            placeholder="Введите тему новости"
            value={props.valueSearchInput}
            onChange={handleValueInputSearchChange}
            required
          />
          <Button
            searchForm={true}
            value="Искать"
            className="search-form__button"
            type="submit"
            onClick={handleSubmit}
          />
        </div>
        <span
          className={`search-form__error ${classError}`}>
          Нужно ввести ключевое слово
        </span>
      </div>
    </section>
  );
}

export default SearchForm;
