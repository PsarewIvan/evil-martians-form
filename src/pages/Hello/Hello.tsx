import React from 'react';

import { useLoginContext } from '../../lib/LoginProvider';

import s from './Hello.module.scss';

const Hello = (): JSX.Element => {
  const { user } = useLoginContext();

  return <h1 className={s.title}>Hi, {user}!</h1>;
};

export default Hello;
