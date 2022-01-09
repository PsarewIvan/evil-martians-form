import React from 'react';

import { ButtonProps } from './types';
import s from './Button.module.scss';

const Button = React.memo((props: ButtonProps): JSX.Element => {
  const { children, onClick, submit, disabled = false } = props;

  return (
    <button
      className={s.button}
      onClick={onClick}
      type={submit ? 'submit' : 'button'}
      disabled={disabled}
    >
      {children}
    </button>
  );
});

export default Button;
