import React, { useState, useCallback } from 'react';

import useFormField from '../../hooks/useFormField';
import FormInput from '../FormInput/FormInput';

import Form from '../Form/Form';
import { login } from '../../lib/userAuth';

const FormLogin = (): JSX.Element => {
  const [error, setError] = useState('');
  const [isFormDisabled, setFormDisabled] = useState(false);
  const emailField = useFormField();
  const passField = useFormField();

  const clearForm = () => {
    emailField.onChange('');
    passField.onChange('');
  };

  const onFormSubmit = () => {
    setFormDisabled(true);
    login(emailField.value, passField.value).then((res) => {
      if (!res) {
        setError('Incorrect email or pass');
      } else {
        setError('');
        clearForm();
      }
    });
    setFormDisabled(true);
  };

  const onPassChange = useCallback((value: string) => {
    setFormDisabled(false);
    passField.onChange(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Form buttonText="Login" onSubmit={onFormSubmit} disabled={isFormDisabled}>
      <FormInput
        label="Email"
        type="email"
        name="email"
        required
        value={emailField.value}
        onChange={emailField.onChange}
      />
      <FormInput
        label="Password"
        type="password"
        name="pass"
        required
        value={passField.value}
        onChange={onPassChange}
        errorText={error}
      />
    </Form>
  );
};

export default FormLogin;
