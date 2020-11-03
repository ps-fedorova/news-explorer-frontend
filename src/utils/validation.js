import React from 'react';

export const useFormWithValidation = () => {
  const [value, setValue] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isValid, setIsValid] = React.useState(false);

  const onChange = React.useCallback((evt) => {
    setValue(evt.target.value);
    setErrorMessage(evt.target.validationMessage);
    setIsValid(evt.target.validity.valid);
  }, []);

  const resetForm = React.useCallback(
    (newValues = '', newErrors = '', newIsValid = false) => {
      setValue(newValues);
      setErrorMessage(newErrors);
      setIsValid(newIsValid);
    },
    [setValue, setIsValid, setIsValid],
  );

  return {
    value, errorMessage, isValid, onChange, resetForm,
  };
};
