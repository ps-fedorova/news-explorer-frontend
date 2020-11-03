import React from 'react';
import Button from '../../Button/Button';
import './PopupForm.css';

function FormPopup(props) {
  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <div className={`popup ${props.isOpen && 'popup_opened'}`}>
      <form
        className='popup__form'
        onSubmit={props.onSubmit}
        noValidate
      >
        <button
          className='popup__close-button'
          onClick={props.onClose}
        />
        <legend className='popup__title'>{props.title}</legend>
        <fieldset className='popup__input-container'>
          {props.children}
        </fieldset>
        {props.register && <span className='popup__warning'>Такой пользователь уже есть</span>}
        {!props.infoTooltip && <Button
          onClick={handleSubmit}
          popup={true}
          disabled={!props.isFormValid}
          value={props.submitButtonText}
        >
        </Button>
        }
        <span className='popup__subtitle'>{!props.infoTooltip && 'или '}
          <span className='popup__link' onClick={props.onChangeForm}>
            {!props.login ? 'Войти' : 'Зарегистрироваться'}</span>
        </span>
      </form>
      <div
        className='popup__overlay'
        onClick={props.onClose}>
      </div>
    </div>
  );
}

export default FormPopup;
