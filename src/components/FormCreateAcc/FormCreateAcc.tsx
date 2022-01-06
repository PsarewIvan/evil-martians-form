import React, { useState } from 'react';

import useFormField from '../../hooks/useFormField';
import FormInput from '../FormInput/FormInput';
import Form from '../Form/Form';
import { checkPass } from '../../lib/checkPass';
import { register } from '../../lib/userAuth';

const FormCreateAcc = (): JSX.Element => {
  const [passError, setPassError] = useState('');
  const [isFormDisabled, setFormDisabled] = useState(false);
  const emailField = useFormField();
  const passField = useFormField();
  const rePassField = useFormField();

  const clearForm = () => {
    emailField.onChange('');
    passField.onChange('');
    rePassField.onChange('');
  };

  const onFormSubmit = () => {
    const isValid = checkPass(passField.value, rePassField.value);
    if (isValid) {
      setFormDisabled(true);
      register(emailField.value, passField.value).then((res) => {
        if (!res.isOk) {
          setPassError(res.message);
        } else {
          setPassError('');
          clearForm();
        }
        setFormDisabled(false);
      });
    } else {
      setPassError(`Passwords don't match`);
    }
  };

  const onRePassChange = (value: string) => {
    if (passError) {
      setPassError('');
    }
    rePassField.onChange(value);
  };

  return (
    <Form buttonText="Create" onSubmit={onFormSubmit} disabled={isFormDisabled}>
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
