import React from 'react';
import clsx from 'clsx';

import s from './Card.module.scss';
import { CardProps, CardWithTitleProps } from './types';

const Card = (props: CardProps): JSX.Element => {
  const { children, className } = props;

  return <div className={clsx(s.card, className)}>{children}</div>;
};

const CardWithTitle = (props: CardWithTitleProps): JSX.Element => {
  const { title, children, ...otherProps } = props;

  return (
    <Card {...otherProps}>
      <h1 className={s.title}>{title}</h1>
      {children}
    </Card>
  );
};

export { Card, CardWithTitle };
