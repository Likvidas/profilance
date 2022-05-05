import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getIsGuest, getName } from '../../store/access/selectors';

const Home: FC = () => {
  const userName = useSelector(getName);
  const isGuest = useSelector(getIsGuest);

  return <div>{`Привет, ${isGuest ? 'Гость' : userName}`}</div>;
};

export default Home;
