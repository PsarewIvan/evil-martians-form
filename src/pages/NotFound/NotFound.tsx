import React from 'react';
import Link from '../../components/Link/Link';

import s from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>404</h1>
      <Link to="/">Take me back</Link>
    </div>
  );
};

export default NotFound;
