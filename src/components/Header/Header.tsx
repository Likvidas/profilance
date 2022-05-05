import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LogoIcon } from '../Logo/LogoIcon';
import css from './Header.module.scss';
import { showModal } from '../../store/actions';
import { getIsShowModal } from '../../store/selectors';

export const Header: FC = () => {
  const isShowModal = useSelector(getIsShowModal);
  const dispatch = useDispatch();
  const handlerClick = () => {
    dispatch(showModal());
  };
  return (
    <header className={css.header}>
      <Link to="/">
        <LogoIcon />
      </Link>
      <nav className={css.navigation}>
        <Link to="/news">Новости</Link>
        <div onClick={handlerClick}>{!isShowModal ? 'Вход' : 'Выход'}</div>
      </nav>
    </header>
  );
};
