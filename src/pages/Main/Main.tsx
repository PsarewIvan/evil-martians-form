import React from 'react';

import Link from '../../components/Link/Link';
import { ROUTES_LIST } from '../../lib/routes';

import s from './Main.module.scss';

const Main = () => {
  return (
    <div className={s.wrapper}>
      <Link to={ROUTES_LIST.login}>Please LogIn</Link>
    </div>
  );
};

export default Main;
