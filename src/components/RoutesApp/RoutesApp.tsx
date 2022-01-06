import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Main from '../../pages/Main/Main';
import NotFound from '../../pages/NotFound/NotFound';
import { routes } from '../../lib/routes';
import Hello from '../../pages/Hello/Hello';
import RequireAuth from '../RequireAuth/RequireAuth';
import Loader from '../Loader/Loader';
import { useLoginState } from '../../hooks/useLoginState';

const RoutesApp = (): JSX.Element => {
  const [user, isLoading] = useLoginState();

  const indexRoute = user ? (
    <Route index element={<Hello />} />
  ) : (
    <Route index element={<Main />} />
  );

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {isLoading ? <Route index element={<Loader />} /> : indexRoute}
        {routes.map(({ path, Component }) => (
          <Route
            path={path}
            element={
              <RequireAuth>
                <Component />
              </RequireAuth>
            }
            key={path}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default RoutesApp;
