export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_ADMIN = 'LOGIN_ADMIN';
export const LOGOUT = 'LOGOUT';

export const logInUser = (payload: string) => ({ type: LOGIN_USER, payload });
export const logInAdmin = (payload: string) => ({ type: LOGIN_ADMIN, payload });
export const logOut = () => ({ type: LOGOUT });
