import { DRAWERS } from './constants.util';

export type ToastVariant = 'success' | 'warning' | 'info' | 'error';

export type TDrawer = (typeof DRAWERS)[keyof typeof DRAWERS];
