import React from 'react';
import * as mainApi from './MainApi';

function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (evt) => {
    const { target } = evt;
    const { value } = target;
    const { name } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity()); console.log(isValid);
  };

  const resetForm = React.useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    setIsValid,
    resetForm,
  };
}

export default useFormWithValidation;
