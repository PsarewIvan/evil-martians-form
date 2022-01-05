import React from 'react';

import { CardWithTitle } from '../../components/Card/Card';
import FormLogin from '../../components/FormLogin/FormLogin';
import Link from '../../components/Link/Link';
import { ROUTES_LIST } from '../../lib/routes';

import s from './Login.module.scss';

const Login = (): JSX.Element => {
  return (
    <CardWithTitle title="Login to your account">
      <FormLogin />
      <span className={s.info}>
        Not registered?{' '}
        <Link to={ROUTES_LIST.createAcc}>Create an account</Link>
      </span>
    </CardWithTitle>
  );
};

export default Login;
