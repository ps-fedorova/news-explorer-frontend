import React from 'react';
import PopupInput from '../PopupInput/PopupInput';
import PopupForm from '../PopupForm/PopupForm';
import useFormWithValidation from '../../../utils/useFormWithValidation';

export default function Login(props) {
  const {
    values, handleChange, errors, isValid, resetForm,
  } = useFormWithValidation();

  React.useEffect(() => {
    resetForm();
  }, [props.isOpen, resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    props.handleLogin(values.email, values.password);
  }
  return (
    <PopupForm
      login={true}
      title='Вход'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onChangeForm={props.onChangeForm}
      handleSubmit={handleSubmit}
      submitButtonText='Войти'
      isDisabled={!isValid}
      authError={props.authError}
    >
      <PopupInput
        label='Email'
        type='email'
        name='email'
        inputLabelClassName='popup__input-label'
        inputFieldClassName='popup__input'
        placeholder='Введите почту'
        onChange={handleChange}
        errors={errors.email}
        value={values.email || ''}
      />
      <PopupInput
        label='Пароль'
        type='password'
        name='password'
        minLength='8'
        maxLength='30'
        inputLabelClassName='popup__input-label'
        inputFieldClassName='popup__input'
        placeholder='Введите пароль'
        onChange={handleChange}
        errors={errors.password}
        value={values.password || ''}
      />
    </PopupForm>
  );
}
