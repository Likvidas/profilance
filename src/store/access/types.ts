import { LOGIN_ADMIN, LOGIN_USER, LOGOUT } from './actions';

export type AccessActions =
  | typeof LOGIN_USER
  | typeof LOGIN_ADMIN
  | typeof LOGOUT;

export interface AccessAction {
  type: AccessActions;
  payload: string;
}

export interface AccessStore {
  isGuest: boolean;
  isAdmin: boolean;
  isUser: boolean;
  name: string;
}
