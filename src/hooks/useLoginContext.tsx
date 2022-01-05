import { useContext } from 'react';

import { LoginContext } from '../lib/LoginProvider';

export const useLoginContext = () => useContext(LoginContext);
