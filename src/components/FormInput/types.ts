import { HTMLInputTypeAttribute } from 'react';

export interface FormInputProps {
  label: string;
  value: string;
  name: string;
  onChange: (value: string) => void;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  placeholder?: string;
  errorText?: string;
}
