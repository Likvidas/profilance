import { GlobalStore } from '../reducer';

export const getNewsList = (store: GlobalStore) => store.news.newsList;
