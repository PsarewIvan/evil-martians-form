import React from 'react';
import { Outlet } from 'react-router-dom';

import GithubIcon from '../../icons/GithubIcon/GithubIcon';
import { useLoginContext } from '../../lib/LoginProvider';
import { ROUTES_LIST } from '../../lib/routes';
import Link from '../Link/Link';

import s from './Layout.module.scss';

const Layout = (): JSX.Element => {
  const { isLogin } = useLoginContext();

  const loginLinkText = isLogin ? '[LoginName]' : 'Login';

  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <a
          className={s.githubLink}
          href="https://github.com/PsarewIvan/evil-martians-form"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
          <span className={s.linkText}>This Repo</span>
        </a>
        <Link to={ROUTES_LIST.login} extend>
          {loginLinkText}
        </Link>
      </header>
      <main className={s.main}>
        <Outlet />
      </main>
      <footer className={s.footer}>2022</footer>
    </div>
  );
};

export default Layout;
