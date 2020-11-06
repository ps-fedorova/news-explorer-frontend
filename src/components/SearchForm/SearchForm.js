import React from 'react';
import './SearchForm.css';
import Button from '../Button/Button';

function SearchForm() {
  const [value, setValue] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // Следующая дикая конструкция нужна чтобы предупреждение исчезало через 5 секунд
  const [timer, setTimer] = React.useState(5);

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
    if (timer === 0) {
      clear();
      setIsSubmitted(false);
    }
  }, [timer]);

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsSubmitted(true);
    setTimer(5);
  }

  function handleValueInputSearchChange(evt) {
    setValue(evt.target.value);
    setIsSubmitted(false);
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
            value={value}
            onChange={handleValueInputSearchChange}
            required // Задать пустой поисковый запрос нельзя
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
          className={`search-form__error ${value.length === 0 && isSubmitted && 'search-form__error_open'}`}>
          Нужно ввести ключевое слово
        </span>
      </div>
    </section>
  );
}

export default SearchForm;
