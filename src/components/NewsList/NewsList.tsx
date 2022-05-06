import { FC } from 'react';
import { mockNewsList } from '../../helpers/variables';
import { NewsItem } from '../NewsItem/NewsItem';
import css from './NewsList.module.scss';

export const NewsList: FC = () => {
  return (
    <div className={css.newsWrapper}>
      <h2 className={css.title}>Список новостей</h2>
      <ul className={css.newsList}>
        {mockNewsList.map(({ id, body, date, title }) => (
          <li key={id}>
            <NewsItem body={body} date={date} title={title} />
          </li>
        ))}
      </ul>
    </div>
  );
};
