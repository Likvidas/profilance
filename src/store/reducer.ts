import { combineReducers } from 'redux';
import { accessReducer } from './access/reducer';
import { AccessStore } from './access/types';
import { modalReducer } from './modal/reducer';
import { ModalStore } from './modal/types';
import { newsReducer } from './news/reducer';
import { NewsStore } from './news/types';

export interface GlobalStore {
  access: AccessStore;
  modal: ModalStore;
  news: NewsStore;
}

export const rootReducer = combineReducers<GlobalStore>({
  access: accessReducer,
  modal: modalReducer,
  news: newsReducer,
});
