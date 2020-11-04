import React from 'react';
import PopupInput from '../PopupInput/PopupInput';
import PopupForm from '../PopupForm/PopupForm';
import useFormWithValidation from '../../../utils/useFormWithValidation';

export default function Register(props) {
  const {
    values, handleChange, errors, isValid, resetForm,
  } = useFormWithValidation();

  React.useEffect(() => {
    resetForm();
  }, [props.isOpen, resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <PopupForm
      register={true}
      title='Регистрация'
      formName='registration'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onChangeForm={props.onChangeForm}
      onSubmit={handleSubmit}
      submitButtonText='Зарегистрироваться'
      isDisabled={!isValid}
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
      <PopupInput
        label='Имя'
        type='text'
        name='name'
        formName='reg'
        minLength='2'
        maxLength='30'
        inputLabelClassName='popup__input-label'
        inputFieldClassName='popup__input'
        placeholder='Введите имя'
        onChange={handleChange}
        errors={errors.name}
        value={values.name || ''}
      />
    </PopupForm>
  );
}
