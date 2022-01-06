import React from 'react';
import { Outlet } from 'react-router-dom';

import GithubIcon from '../../icons/GithubIcon/GithubIcon';
import LoginLink from '../UserLink/UserLink';

import s from './Layout.module.scss';

const Layout = (): JSX.Element => {
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
        <LoginLink />
      </header>
      <main className={s.main}>
        <Outlet />
      </main>
      <footer className={s.footer}>2022</footer>
    </div>
  );
};

export default Layout;
