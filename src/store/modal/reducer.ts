import { HIDE_MODAL, SHOW_MODAL } from './actions';
import { ModalAction, ModalStore } from './types';

const initialState: ModalStore = {
  isShowModal: false,
};

export const modalReducer = (
  state: ModalStore = initialState,
  { type }: ModalAction,
) => {
  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        isShowModal: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        isShowModal: false,
      };

    default:
      return state;
  }
};
