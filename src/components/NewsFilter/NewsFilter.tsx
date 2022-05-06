import { ChangeEventHandler, FC } from 'react';
import css from './NewsFilter.module.scss';
import { NewsFilterProps } from './NewsFilterProps';

export const NewsFilter: FC<NewsFilterProps> = ({
  searchValue,
  onChangeSearch,
}) => {
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChangeSearch(event.target.value);
  };

  return (
    <div>
      <h3 className={css.title}>Поиск</h3>
      <input
        className={css.input}
        type="text"
        placeholder="Введите Ваш запрос..."
        value={searchValue}
        onChange={onChange}
      />
    </div>
  );
};
