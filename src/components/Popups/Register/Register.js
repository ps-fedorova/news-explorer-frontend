import React from 'react';
import PopupInput from '../PopupInput/PopupInput';
import PopupForm from '../PopupForm/PopupForm';
import { useFormWithValidation } from '../../../utils/validation';

export default function Register(props) {
  const emailField = useFormWithValidation();
  const nameField = useFormWithValidation();
  const passwordField = useFormWithValidation();

  return (
    <PopupForm
      register={true}
      title='Регистрация'
      formName='registration'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onChangeForm={props.onChangeForm}
      isFormValid={emailField.isValid && passwordField.isValid && nameField.isValid}
      submitButtonText='Зарегистрироваться'
    >
      <PopupInput
        label='Email'
        minLength='8'
        maxLength='30'
        type='email'
        {...emailField}
        inputLabelClassName='popup__input-label'
        inputFieldClassName='popup__input'
        placeholder='Введите почту' />
      <PopupInput
        label='Пароль'
        minLength='8'
        maxLength='30'
        type='password'
        {...passwordField}
        inputLabelClassName='popup__input-label'
        inputFieldClassName='popup__input'
        placeholder='Введите пароль' />
      <PopupInput
        label='Имя'
        name='name'
        formName='reg'
        minLength='2'
        maxLength='30'
        type='text'
        required={true}
        {...nameField}
        inputLabelClassName='popup__input-label'
        inputFieldClassName='popup__input'
        placeholder='Введите имя' />
    </PopupForm>
  );
}
