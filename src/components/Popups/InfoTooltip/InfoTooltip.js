import React from 'react';
import PopupForm from '../PopupForm/PopupForm';

function InfoTooltip(props) {
  return (
    <PopupForm
      infoTooltip={true}
      title="Пользователь успешно зарегистрирован!"
      linkText="Войти"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onChangeForm={props.onChangeForm}
    />
  );
}

export default InfoTooltip;
