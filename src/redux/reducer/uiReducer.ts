import { UiAction, UI } from '../../interfaces/interfaces';
import { ActionType } from '../types/types';

const INITIAL_STATE: UI = {
  loading: false,
  msgError: '',
  modalLoginOpen: false,
  modalPhotoOpen: false,
};

export const uiReducer = (state: UI = INITIAL_STATE, action: UiAction): UI => {
  switch (action.type) {
    case ActionType.UI_SET_ERROR:
      return {
        ...state,
        msgError: action.payload,
      };
    case ActionType.UI_REMOVE_ERROR:
      return {
        ...state,
        msgError: '',
      };
    case ActionType.UI_START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionType.UI_FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };
    case ActionType.UI_OPEN_MODAL_LOGIN:
      return {
        ...state,
        modalLoginOpen: true,
      };
    case ActionType.UI_CLOSE_MODAL_LOGIN:
      return {
        ...state,
        modalLoginOpen: false,
      };

    case ActionType.UI_OPEN_MODAL_PHOTO:
      return {
        ...state,
        modalPhotoOpen: true,
      };
    case ActionType.UI_CLOSE_MODAL_PHOTO:
      return {
        ...state,
        modalPhotoOpen: false,
      };
    default:
      return state;
  }
};
