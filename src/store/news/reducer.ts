import { mockNewsList } from '../../helpers/variables';
import { ADDED_NEWS, UPDATE_NEWS } from './actions';
import { AddNewsAction, UpdateNewsAction, NewsStore } from './types';

const initialState: NewsStore = {
  newsList: mockNewsList,
};

export const newsReducer = (
  state: NewsStore = initialState,
  { type, payload }: AddNewsAction | UpdateNewsAction,
) => {
  switch (type) {
    case ADDED_NEWS:
      return {
        ...state,
        newsList: [payload, ...state.newsList],
      };
    case UPDATE_NEWS:
      return {
        ...state,
        newsList: payload,
      };

    default:
      return state;
  }
};
