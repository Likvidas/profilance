import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NewsFilter } from '../../components/NewsFilter/NewsFilter';
import { NewsList } from '../../components/NewsList/NewsList';
import { getNewsList } from '../../store/news/selectors';
import { News } from '../../store/news/types';
import css from './NewsPage.module.scss';

const NewsPage: FC = () => {
  const newsList = useSelector(getNewsList);
  const [searchValue, setSearchValue] = useState('');
  const [filtredNews, setFiltredNews] = useState<News[]>([]);

  const onChangeSearch = (value: string) => {
    setSearchValue(value);
  };

  useEffect(() => {
    console.log(searchValue);
    if (searchValue) {
      const actualNews = newsList.filter((news) =>
        news.title.toLowerCase().includes(searchValue.toLocaleLowerCase()),
      );
      setFiltredNews(actualNews);
    } else {
      setFiltredNews(newsList);
    }
  }, [newsList, searchValue]);

  return (
    <div className={css.pageWrapper}>
      <NewsFilter searchValue={searchValue} onChangeSearch={onChangeSearch} />
      <NewsList newsList={filtredNews} />
    </div>
  );
};

export default NewsPage;
