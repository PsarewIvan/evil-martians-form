import React, { FormEvent } from 'react';

import Button from '../Button/Button';

import { FormProps } from './types';
import s from './Form.module.scss';

const Form = (props: FormProps): JSX.Element => {
  const { onSubmit, children, buttonText, disabled } = props;

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit();
  };

  return (
    <form className={s.form} onSubmit={handleFormSubmit}>
      {children}
      <Button submit disabled={disabled}>
        {buttonText}
      </Button>
    </form>
  );
};

export default Form;
