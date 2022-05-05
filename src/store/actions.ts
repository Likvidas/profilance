import { Actyons } from './types';

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = (): Actyons => ({ type: SHOW_MODAL });
export const hideModal = (): Actyons => ({ type: HIDE_MODAL });
