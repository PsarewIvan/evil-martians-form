import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useLoginState } from '../../hooks/useLoginState';
import Loader from '../Loader/Loader';
import { RequireAuthProps } from './types';

const RequireAuth = (props: RequireAuthProps): JSX.Element => {
  const { children } = props;
  let [user, isLoading] = useLoginState();
  let location = useLocation();

  if (isLoading) {
    return <Loader />;
  }

  if (user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
