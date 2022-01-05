import CreateAccount from '../pages/CreateAccount/CreateAccount';
import Login from '../pages/Login/Login';

export enum ROUTES_LIST {
  login = 'login',
  createAcc = 'create-account',
}

export const routes = [
  {
    path: ROUTES_LIST.login,
    Component: Login,
  },
  {
    path: ROUTES_LIST.createAcc,
    Component: CreateAccount,
  },
];
