import { ADDED_NEWS, DELETED_NEWS } from './actions';

export interface DelNewsAction {
  type: typeof DELETED_NEWS;
  payload?: News;
}

export interface AddNewsAction {
  type: typeof ADDED_NEWS;
  payload: News;
}

export interface NewsStore {
  newsList: Array<News>;
}

export interface News {
  id: string;
  date: string;
  title: string;
  body: string;
  isApproved: boolean;
}
