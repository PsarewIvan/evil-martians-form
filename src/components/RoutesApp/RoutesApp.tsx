import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Main from '../../pages/Main/Main';
import NotFound from '../../pages/NotFound/NotFound';
import Users from '../../pages/Users/Users';
import { useLoginContext } from '../../hooks/useLoginContext';
import { routes } from '../../lib/routes';

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
        {routes.map(({ path, Component }) => (
          <Route path={path} element={<Component />} key={path} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default RoutesApp;
