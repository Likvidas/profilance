import { LOGIN_ADMIN, LOGIN_USER, LOGOUT } from './actions';
import { AccessAction, AccessStore } from './types';

const initialState: AccessStore = {
  isGuest: true,
  isAdmin: false,
  isUser: false,
  name: '',
};

export const accessReducer = (
  state: AccessStore = initialState,
  { type, payload }: AccessAction,
) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        isGuest: false,
        isUser: true,
        name: payload,
      };
    case LOGIN_ADMIN:
      return {
        ...state,
        isGuest: false,
        isAdmin: true,
        name: payload,
      };
    case LOGOUT:
      return {
        ...state,
        isGuest: true,
        isAdmin: false,
        isUser: false,
        name: '',
      };
    default:
      return state;
  }
};
