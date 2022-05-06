import { ADDED_NEWS, UPDATE_NEWS } from './actions';

export interface AddNewsAction {
  type: typeof ADDED_NEWS;
  payload: News;
}

export interface UpdateNewsAction {
  type: typeof UPDATE_NEWS;
  payload: News[];
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
