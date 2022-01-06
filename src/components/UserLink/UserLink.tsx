import React from 'react';
import { useLoginState } from '../../hooks/useLoginState';

import { ROUTES_LIST } from '../../lib/routes';
import Link from '../Link/Link';
import LogoutLink from '../LogoutLink/LogoutLink';

const UserLink = (): JSX.Element | null => {
  const [user, isLoading] = useLoginState();

  const currentLink = user ? (
    <LogoutLink />
  ) : (
    <Link to={ROUTES_LIST.login} extend>
      Login
    </Link>
  );

  return isLoading ? null : currentLink;
};

export default UserLink;
