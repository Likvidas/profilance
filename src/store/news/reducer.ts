import { mockNewsList } from '../../helpers/variables';
import { ADDED_NEWS, DELETED_NEWS } from './actions';
import { NewsAction, NewsStore } from './types';

const initialState: NewsStore = {
  newsList: mockNewsList,
};

export const newsReducer = (
  state: NewsStore = initialState,
  { type }: NewsAction,
) => {
  switch (type) {
    case ADDED_NEWS:
      return {
        ...state,
      };
    case DELETED_NEWS:
      return {
        ...state,
      };

    default:
      return state;
  }
};
