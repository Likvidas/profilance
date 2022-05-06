import { AddNewsAction, News, DelNewsAction } from './types';

export const ADDED_NEWS = 'ADDED_NEWS';
export const DELETED_NEWS = 'DELETED_NEWS';

export const addNews = (payload: News): AddNewsAction => ({
  type: ADDED_NEWS,
  payload,
});
export const deleteNews = (): DelNewsAction => ({ type: DELETED_NEWS });
