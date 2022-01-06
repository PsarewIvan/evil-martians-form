import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../lib/firebase';

export const useLoginState = (): [user: string | null, loading: boolean] => {
  const [user, setUser] = useState<null | string>(null);
  const [currentUser, isLoading] = useAuthState(auth);

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser.email);
    } else {
      setUser(null);
    }
  }, [currentUser]);

  return [user, isLoading];
};
