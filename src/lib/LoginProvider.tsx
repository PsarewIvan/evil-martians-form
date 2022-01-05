import React, { useState, createContext, ReactNode } from 'react';

interface ILoginContext {
  isLogin: boolean;
}

interface LoginProviderProps {
  children: ReactNode;
}

const defaultState = {
  isLogin: false,
};

export const LoginContext = createContext<ILoginContext>(defaultState);

const LoginProvider = (props: LoginProviderProps): JSX.Element => {
  const { children } = props;
  const [isLogin, setLogin] = useState(defaultState.isLogin);

  return (
    <LoginContext.Provider
      value={{
        isLogin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
