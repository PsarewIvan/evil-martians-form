import React, { useState, ChangeEvent } from 'react';
import clsx from 'clsx';

import s from './FormInput.module.scss';
import { FormInputProps } from './types';

const FormInput = (props: FormInputProps): JSX.Element => {
  const {
    value,
    onChange,
    label,
    type = 'text',
    required,
    placeholder,
    name,
    errorText,
  } = props;
  const [isBlur, setBlur] = useState(false);
  const [isChange, setChanged] = useState(false);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    if (!isChange) {
      setChanged(true);
    }
    onChange(value);
  };

  const handleInputBlur = () => {
    if (isChange) {
      setBlur(true);
    }
  };

  return (
    <label className={s.label}>
      <input
        className={clsx(s.input, isBlur && s.inputValidate)}
        value={value}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <span className={s.labelText}>{label}</span>
      {errorText && <span className={s.error}>{errorText}</span>}
    </label>
  );
};

export default FormInput;
