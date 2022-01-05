import React from 'react';

import useFormField from '../../hooks/useFormField';
import FormInput from '../FormInput/FormInput';

import Form from '../Form/Form';

const FormLogin = (): JSX.Element => {
  const emailField = useFormField();
  const passField = useFormField();

  const onFormSubmit = () => {
    console.log('[FormLogin - onSubmit]');
  };

  return (
    <Form buttonText="Login" onSubmit={onFormSubmit}>
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
    </Form>
  );
};

export default FormLogin;
