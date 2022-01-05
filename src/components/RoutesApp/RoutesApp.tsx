import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../Layout/Layout';
import CreateLogin from '../../pages/CreateAccount/CreateAccount';
import Login from '../../pages/Login/Login';
import Main from '../../pages/Main/Main';
import NotFound from '../../pages/NotFound/NotFound';
import Users from '../../pages/Users/Users';
import { useLoginContext } from '../../hooks/useLoginContext';
import { ROUTES } from '../../lib/routes';

const RoutesApp = (): JSX.Element => {
  const { isLogin } = useLoginContext();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {isLogin ? (
          <Route index element={<Users />} />
        ) : (
          <Route index element={<Main />} />
        )}
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.createAcc} element={<CreateLogin />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default RoutesApp;
