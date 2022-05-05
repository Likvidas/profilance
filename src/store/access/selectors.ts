import { GlobalStore } from '../reducer';

export const getIsUser = (store: GlobalStore) => store.access.isUser;
export const getIsAdmin = (store: GlobalStore) => store.access.isAdmin;
export const getIsGuest = (store: GlobalStore) => store.access.isGuest;
export const getName = (store: GlobalStore) => store.access.name;
