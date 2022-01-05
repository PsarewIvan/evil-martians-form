import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import { LinkProps } from './types';

import s from './Link.module.scss';

const Link = (props: LinkProps): JSX.Element => {
  const { children, to, extend } = props;

  return (
    <NavLink className={clsx(s.link, extend && s.linkExtend)} to={`/${to}`}>
      {children}
    </NavLink>
  );
};

export default Link;
