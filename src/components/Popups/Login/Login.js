import React from 'react';
import PopupInput from '../PopupInput/PopupInput';
import PopupForm from '../PopupForm/PopupForm';
import { useFormWithValidation } from '../../../utils/validation';

export default function Login(props) {
  const emailField = useFormWithValidation();
  const passwordField = useFormWithValidation();

  React.useEffect(() => {
    emailField.resetForm();
    passwordField.resetForm();
  }, [emailField, passwordField, props.isOpen]);

  return (
    <PopupForm
      login={true}
      title='Вход'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onChangeForm={props.onChangeForm}
      isFormValid={emailField.isValid && passwordField.isValid}
      submitButtonText='Войти'
    >
      <PopupInput
        label='Email'
        type='email'
        minLength='8'
        maxLength='30'
        {...emailField}
        inputLabelClassName='popup__input-label'
        inputFieldClassName='popup__input'
        placeholder='Введите почту'/>
      <PopupInput
        label='Пароль'
        type='password'
        minLength='8'
        maxLength='30'
        required={true}
        {...passwordField}
        inputLabelClassName='popup__input-label'
        inputFieldClassName='popup__input'
        placeholder='Введите пароль'/>
    </PopupForm>
  );
}
