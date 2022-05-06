import { AddNewsAction, News, UpdateNewsAction } from './types';

export const ADDED_NEWS = 'ADDED_NEWS';
export const UPDATE_NEWS = 'DELETED_NEWS';

export const addNews = (payload: News): AddNewsAction => ({
  type: ADDED_NEWS,
  payload,
});
export const updateNews = (payload: News[]): UpdateNewsAction => ({
  type: UPDATE_NEWS,
  payload,
});
