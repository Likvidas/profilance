import { FC } from 'react';
import { NewsItem } from '../NewsItem/NewsItem';
import css from './NewsList.module.scss';
import { NewsListProps } from './NewsListProps';

export const NewsList: FC<NewsListProps> = ({ newsList }) => {
  return (
    <div className={css.newsWrapper}>
      <h2 className={css.title}>Список новостей</h2>
      <ul className={css.newsList}>
        {newsList.map(({ id, body, date, title }) => (
          <li key={id}>
            <NewsItem body={body} date={date} title={title} />
          </li>
        ))}
      </ul>
    </div>
  );
};
