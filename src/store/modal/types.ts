import { HIDE_MODAL, SHOW_MODAL } from './actions';

export type ModalActions = typeof SHOW_MODAL | typeof HIDE_MODAL;

export interface ModalAction {
  type: ModalActions;
}

export interface ModalStore {
  isShowModal: boolean;
}
