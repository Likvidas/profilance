import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NewsFilter } from '../../components/NewsFilter/NewsFilter';
import { NewsList } from '../../components/NewsList/NewsList';
import { getNewsList } from '../../store/news/selectors';
import css from './News.module.scss';

const News: FC = () => {
  const newsList = useSelector(getNewsList);
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearch = (value: string) => {
    setSearchValue(value);
  };

  useEffect(() => {
    console.log('hi');
  }, [searchValue]);

  return (
    <div className={css.pageWrapper}>
      <NewsFilter searchValue={searchValue} onChangeSearch={onChangeSearch} />
      <NewsList newsList={newsList} />
    </div>
  );
};

export default News;
