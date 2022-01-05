import React, { useState, useEffect } from 'react';

import useFormField from '../../hooks/useFormField';
import FormInput from '../FormInput/FormInput';

import Form from '../Form/Form';
import { checkPass } from '../../lib/checkPass';

const FormCreateAcc = (): JSX.Element => {
  const [passError, setPassError] = useState('');
  const nameField = useFormField();
  const emailField = useFormField();
  const passField = useFormField();
  const rePassField = useFormField();

  const onFormSubmit = () => {
    const isValid = checkPass(passField.value, rePassField.value);
    if (!isValid) {
      setPassError(`Passwords don't match`);
    }
    console.log('[FormCreateAcc - onSubmit]', isValid);
  };

  const onRePassChange = (value: string) => {
    if (passError) {
      setPassError('');
    }
    rePassField.onChange(value);
  };

  return (
    <Form buttonText="Create" onSubmit={onFormSubmit}>
      <FormInput
        label="Name"
        name="name"
        required
        value={nameField.value}
        onChange={nameField.onChange}
      />
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
        onChange={passField.onChange}
      />
      <FormInput
        label="Confirm password"
        type="password"
        name="rePass"
        required
        value={rePassField.value}
        onChange={onRePassChange}
        errorText={passError}
      />
    </Form>
  );
};

export default FormCreateAcc;
