import { ReactNode } from 'react';

export interface FormProps {
  buttonText: string;
  children: ReactNode;
  onSubmit: () => void;
}
