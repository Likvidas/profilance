import { mockNewsList } from '../../helpers/variables';
import { ADDED_NEWS, DELETED_NEWS } from './actions';
import { AddNewsAction, DelNewsAction, NewsStore } from './types';

const initialState: NewsStore = {
  newsList: mockNewsList,
};

export const newsReducer = (
  state: NewsStore = initialState,
  { type, payload }: AddNewsAction | DelNewsAction,
) => {
  switch (type) {
    case ADDED_NEWS:
      return {
        ...state,
        newsList: [payload, ...state.newsList],
      };
    case DELETED_NEWS:
      return {
        ...state,
      };

    default:
      return state;
  }
};
