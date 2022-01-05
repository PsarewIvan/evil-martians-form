import React from 'react';

import { ButtonProps } from './types';
import s from './Button.module.scss';

const Button = (props: ButtonProps): JSX.Element => {
  const { children, onClick, submit } = props;

  return (
    <button
      className={s.button}
      onClick={onClick}
      type={submit ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
};

export default Button;
