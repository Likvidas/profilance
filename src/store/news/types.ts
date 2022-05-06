import { ADDED_NEWS, DELETED_NEWS } from './actions';

export type NewsActions = typeof ADDED_NEWS | typeof DELETED_NEWS;

export interface NewsAction {
  type: NewsActions;
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
