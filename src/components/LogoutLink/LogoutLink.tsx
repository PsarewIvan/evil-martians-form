import React from 'react';
import { logout } from '../../lib/userAuth';

import s from './LogoutLink.module.scss';

const LogoutLink = (): JSX.Element => {
  const handleButtonClick = () => {
    logout();
  };

  return (
    <button className={s.button} type="button" onClick={handleButtonClick}>
      Logout
    </button>
  );
};

export default LogoutLink;
