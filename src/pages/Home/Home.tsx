import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getIsGuest, getName } from '../../store/access/selectors';
import css from './Home.module.scss';

const Home: FC = () => {
  const userName = useSelector(getName);
  const isGuest = useSelector(getIsGuest);

  return (
    <div className={css.pageWrapper}>
      <h1 className={css.title}>{`Привет, ${isGuest ? 'Гость' : userName}`}</h1>
    </div>
  );
};

export default Home;
