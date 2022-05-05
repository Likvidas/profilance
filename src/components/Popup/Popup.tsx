import { ChangeEventHandler, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  adminLogin,
  adminPassword,
  userLogin,
  userPassword,
} from '../../helpers/variables';
import { logInAdmin, logInUser } from '../../store/access/actions';
import { hideModal } from '../../store/modal/actions';
import css from './Popup.module.scss';

export const Popup: FC = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isErrorLogin, setIsErrorLogin] = useState(false);

  const onClickOverlay = () => {
    dispatch(hideModal());
  };

  const onClickReset = () => {
    setLogin('');
    setPassword('');
    setIsErrorLogin(false);
  };

  const onClickEnter = () => {
    if (login === userLogin && password === userPassword) {
      dispatch(logInUser(login));
      dispatch(hideModal());
      return;
    }

    if (login === adminLogin && password === adminPassword) {
      dispatch(logInAdmin(login));
      dispatch(hideModal());
      return;
    }
    setIsErrorLogin(true);
  };

  const onChangeLogin: ChangeEventHandler<HTMLInputElement> = (event) => {
    setIsErrorLogin(false);
    setLogin(event.target.value);
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setIsErrorLogin(false);
    setPassword(event.target.value);
  };

  return (
    <>
      <div className={css.overlay} onClick={onClickOverlay}></div>
      <div className={css.window}>
        <h1>Log In</h1>
        <label className={css.labelGroup}>
          <span className={css.labelText}>User Id*</span>
          <input
            className={css.input}
            type="text"
            placeholder="Please enter your login"
            value={login}
            onChange={onChangeLogin}
          />
        </label>
        <label className={css.labelGroup}>
          <span className={css.labelText}>Password*</span>
          <input
            className={css.input}
            type="password"
            placeholder="Please enter your password"
            value={password}
            onChange={onChangePassword}
          />
        </label>
        <div className={css.btnGroup}>
          <button className={css.btn} onClick={onClickReset}>
            Reset
          </button>
          <button className={css.btn} onClick={onClickEnter}>
            Enter
          </button>
        </div>
        {isErrorLogin && (
          <span className={css.warning}>*Incorrect user or password</span>
        )}
      </div>
    </>
  );
};
