import { NewsAction } from './types';

export const ADDED_NEWS = 'ADDED_NEWS';
export const DELETED_NEWS = 'DELETED_NEWS';

export const addNews = (): NewsAction => ({ type: ADDED_NEWS });
export const deleteNews = (): NewsAction => ({ type: DELETED_NEWS });
