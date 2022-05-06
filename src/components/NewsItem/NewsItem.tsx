import { FC } from 'react';
import { NewsItemProps } from './NewsItemProps';
import css from './NewsItem.module.scss';

export const NewsItem: FC<NewsItemProps> = ({ date, title, body }) => {
  return (
    <div className={css.newsWrapper}>
      <span className={css.date}>{`Дата публикации: ${date}`}</span>
      <h3 className={css.title}>{title}</h3>
      <p className={css.body}>{body}</p>
    </div>
  );
};
