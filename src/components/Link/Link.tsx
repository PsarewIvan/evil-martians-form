import React from 'react';
import { NavLink } from 'react-router-dom';
import { LinkProps } from './types';

import s from './Link.module.scss';

const Link = (props: LinkProps): JSX.Element => {
  const { children, to } = props;

  return (
    <NavLink className={s.link} to={`/${to}`}>
      {children}
    </NavLink>
  );
};

export default Link;
