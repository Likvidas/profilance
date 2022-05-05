import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LogoIcon } from '../Logo/LogoIcon';
import { showModal } from '../../store/modal/actions';
import { logOut } from '../../store/access/actions';
import { getIsGuest } from '../../store/access/selectors';
import css from './Header.module.scss';

export const Header: FC = () => {
  const isGuest = useSelector(getIsGuest);
  const dispatch = useDispatch();

  const onClickLogIn = () => {
    dispatch(showModal());
  };

  const onClickLogOut = () => {
    dispatch(logOut());
  };

  return (
    <header className={css.header}>
      <Link to="/">
        <LogoIcon />
      </Link>
      <nav className={css.navigation}>
        <Link to="/news">Новости</Link>
        {isGuest && <div onClick={onClickLogIn}>Вход</div>}
        {!isGuest && <div onClick={onClickLogOut}>Выход</div>}
      </nav>
    </header>
  );
};
