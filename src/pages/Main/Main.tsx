import React from 'react';

import Link from '../../components/Link/Link';
import { ROUTES } from '../../lib/routes';

import s from './Main.module.scss';

const Main = () => {
  return (
    <div className={s.wrapper}>
      <Link to={ROUTES.login}>Please LogIn</Link>
    </div>
  );
};

export default Main;
