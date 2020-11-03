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
  }, [props.isOpen]);

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
        // id='email_login'
        type='email'
        minLength='6'
        maxLength='30'
        {...emailField}
        placeholder='Введите почту'/>
      <PopupInput
        label='Пароль'
        // name='password'
        // formName='log'
        type='password'
        minLength='8'
        maxLength='30'
        required={true}
        {...passwordField}
        placeholder='Введите пароль'/>
    </PopupForm>
  );
}
