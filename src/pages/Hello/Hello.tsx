import React from 'react';

import { useLoginState } from '../../hooks/useLoginState';

import s from './Hello.module.scss';

const Hello = (): JSX.Element => {
  const [user] = useLoginState();

  return <h1 className={s.title}>Hi, {user}!</h1>;
};

export default Hello;
