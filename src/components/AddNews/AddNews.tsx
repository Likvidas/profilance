import { ChangeEventHandler, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { generateId } from '../../helpers/helpers';
import { addNews } from '../../store/news/actions';
import css from './AddNews.module.scss';

export const AddNews: FC = () => {
  const dispatch = useDispatch();

  const [newsTitle, setNewsTitle] = useState('');
  const [newsBody, setNewsBody] = useState('');

  const onCangeTitle: ChangeEventHandler<HTMLInputElement> = (event) => {
    setNewsTitle(event.target.value);
  };
  const onCangeBody: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setNewsBody(event.target.value);
  };

  const onAddNews = () => {
    if (newsTitle && newsBody) {
      const currentDate = new Date().toLocaleDateString().replaceAll('.', '-');
      dispatch(
        addNews({
          id: generateId(24),
          date: currentDate,
          title: newsTitle,
          body: newsBody,
          isApproved: false,
        }),
      );
      setNewsTitle('');
      setNewsBody('');
    }
  };

  return (
    <div className={css.addNewsWrapper}>
      <h3 className={css.title}>Добавить Новость</h3>
      <input
        className={css.input}
        type="text"
        placeholder="Введите название новости..."
        value={newsTitle}
        onChange={onCangeTitle}
      />
      <textarea
        className={css.input}
        placeholder="Введите новость..."
        value={newsBody}
        onChange={onCangeBody}
      />
      <button className={css.btn} onClick={onAddNews}>
        + добавить
      </button>
    </div>
  );
};
