import { UiAction } from '../../interfaces/interfaces';
import { ActionType } from '../types/types';

export const setError = (err: string): UiAction => ({
  type: ActionType.UI_SET_ERROR,
  payload: err,
});

export const removeError = (): UiAction => ({
  type: ActionType.UI_REMOVE_ERROR,
});

export const startLoading = (): UiAction => ({
  type: ActionType.UI_START_LOADING,
});

export const finishLoading = (): UiAction => ({
  type: ActionType.UI_FINISH_LOADING,
});

export const uiOpenLoginModal = (): UiAction => ({
  type: ActionType.UI_OPEN_MODAL_LOGIN,
});

export const uiCloseLoginModal = (): UiAction => ({
  type: ActionType.UI_CLOSE_MODAL_LOGIN,
});

export const uiOpenPhotoModal = (): UiAction => ({
  type: ActionType.UI_OPEN_MODAL_PHOTO,
});

export const uiClosePhotoModal = (): UiAction => ({
  type: ActionType.UI_CLOSE_MODAL_PHOTO,
});
