import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export interface CardWithTitleProps extends CardProps {
  title: string;
}
