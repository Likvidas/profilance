import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from '../Logo/LogoIcon';
import css from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={css.header}>
      <Link to="/">
        <LogoIcon />
      </Link>
      <nav className={css.navigation}>
        <Link to="/news">News</Link>
        <Link to="/">Go Home</Link>
      </nav>
    </header>
  );
};
