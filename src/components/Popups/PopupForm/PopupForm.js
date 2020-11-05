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
          type='button'
        />
        <p className='popup__title'>{props.title}</p>
        <fieldset className='popup__input-container'>
          {props.children}
        </fieldset>
        {props.register && <span className='popup__warning'>Такой пользователь уже есть</span>}
        {!props.infoTooltip

        && <Button
          onClick={handleSubmit}
          popup={true}
          disabled={props.isDisabled}
          value={props.submitButtonText}
        >
        </Button>
        }
        <div
          className={`popup__subtitle ${props.infoTooltip ? 'popup__subtitle_infoTooltip' : ''}`}>{!props.infoTooltip && 'или'}
          <span className={`popup__link ${props.infoTooltip ? 'popup__link_infoTooltip' : ''}`}
                onClick={props.onChangeForm}>
            {!props.login ? ' Войти' : ' Зарегистрироваться'}</span>
        </div>
      </form>
      <div
        className='popup__overlay'
        onClick={props.onClose}>
      </div>
    </div>
  );
}

export default FormPopup;
