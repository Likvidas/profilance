import { HIDE_MODAL, SHOW_MODAL } from './actions';

export type ActyonsType = typeof SHOW_MODAL | typeof HIDE_MODAL;

export interface Actyons {
  type: ActyonsType;
  payload?: unknown;
}

export interface GlobalStore {
  isShowModal: boolean;
}
