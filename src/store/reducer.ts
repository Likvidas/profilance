import { HIDE_MODAL, SHOW_MODAL } from './actions';
import { Actyons, GlobalStore } from './types';

const initialState: GlobalStore = {
  isShowModal: false,
};

export const rootReducer = (
  state: GlobalStore = initialState,
  actyon: Actyons,
) => {
  switch (actyon.type) {
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
