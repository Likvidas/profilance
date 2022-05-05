import { ModalAction } from './types';

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = (): ModalAction => ({ type: SHOW_MODAL });
export const hideModal = (): ModalAction => ({ type: HIDE_MODAL });
