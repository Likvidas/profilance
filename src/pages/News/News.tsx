import { FC } from 'react';
import { NewsList } from '../../components/NewsList/NewsList';
import css from './News.module.scss';

const News: FC = () => {
  return (
    <div className={css.pageWrapper}>
      <NewsList />
    </div>
  );
};

export default News;
