import { FC } from 'react';
import css from './Popup.module.scss';

export const Popup: FC = () => {
  return (
    <div className={css.overlay}>
      <div className={css.window}>Content</div>
    </div>
  );
};
