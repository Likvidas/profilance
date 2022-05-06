import { FC } from 'react';
import { NewsItemProps } from './NewsItemProps';
import css from './NewsItem.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { updateNews } from '../../store/news/actions';
import { getNewsList } from '../../store/news/selectors';
import { getIsAdmin } from '../../store/access/selectors';

export const NewsItem: FC<NewsItemProps> = ({
  id,
  date,
  title,
  body,
  isApproved,
}) => {
  const dispatch = useDispatch();
  const newsList = useSelector(getNewsList);
  const isAdmin = useSelector(getIsAdmin);

  const onClickApprove = () => {
    const actualNewsList = newsList.map((news) => {
      if (news.id === id) {
        return { ...news, isApproved: true };
      }
      return news;
    });
    dispatch(updateNews(actualNewsList));
  };

  const onClickDelete = () => {
    const actualNewsList = newsList.filter((news) => news.id !== id);
    dispatch(updateNews(actualNewsList));
  };

  return (
    <div className={css.newsWrapper}>
      <span className={css.date}>{`Дата публикации: ${date}`}</span>
      <h3 className={css.title}>{title}</h3>
      <p className={css.body}>{body}</p>
      {isAdmin && (
        <div className={css.btnGroup}>
          {!isApproved && (
            <button className={css.btn} onClick={onClickApprove}>
              Одобрить новость
            </button>
          )}
          <button className={css.btn} onClick={onClickDelete}>
            Удалить новость
          </button>
        </div>
      )}
    </div>
  );
};
