import { combineReducers } from 'redux';
import { accessReducer } from './access/reducer';
import { AccessStore } from './access/types';
import { modalReducer } from './modal/reducer';
import { ModalStore } from './modal/types';

export interface GlobalStore {
  access: AccessStore;
  modal: ModalStore;
}

export const rootReducer = combineReducers({
  access: accessReducer,
  modal: modalReducer,
});
