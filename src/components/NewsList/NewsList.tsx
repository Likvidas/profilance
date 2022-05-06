import { FC, useEffect, useState } from 'react';
import { NewsItem } from '../NewsItem/NewsItem';
import { NewsListProps } from './NewsListProps';
import css from './NewsList.module.scss';
import { useSelector } from 'react-redux';
import { getIsGuest } from '../../store/access/selectors';
import { News } from '../../store/news/types';

export const NewsList: FC<NewsListProps> = ({ newsList }) => {
  const isGuest = useSelector(getIsGuest);

  const [filtredNewsList, setFiltredNewsList] = useState<News[]>([]);

  useEffect(() => {
    if (isGuest) {
      const actualNews = newsList.filter((news) => news.isApproved);
      setFiltredNewsList(actualNews);
      return;
    }
    setFiltredNewsList(newsList);
  }, [isGuest, newsList]);

  return (
    <div className={css.newsWrapper}>
      <h2 className={css.title}>Список новостей</h2>
      <ul className={css.newsList}>
        {filtredNewsList.map(({ id, body, date, title, isApproved }) => (
          <li key={id}>
            <NewsItem
              isApproved={isApproved}
              id={id}
              body={body}
              date={date}
              title={title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
