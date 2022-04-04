import { PhotoAction, Photos } from '../../interfaces/interfaces';
import { ActionType } from '../types/types';

const INITIAL_STATE: Photos = {
  photos: [],
  active: null,
  photoByLabel: [],
  initPhotos: true,
};

export const photoReducer = (
  state: Photos = INITIAL_STATE,
  action: PhotoAction
): Photos => {
  switch (action.type) {
    case ActionType.PHOTO_LOAD:
      return {
        ...state,
        photos: action.payload,
      };

    case ActionType.PHOTO_LOGOUT_CLEANING:
      return {
        ...state,
        photos: [],
        active: null,
      };

    case ActionType.PHOTO_ADD_NEW:
      return {
        ...state,
        // photos: [action.payload, ...state.photos],
      };
    case ActionType.PHOTO_ACTIVE:
      return {
        ...state,
        active: action.payload,
      };
    case ActionType.PHOTO_DESACTIVE:
      return {
        ...state,
        active: null,
      };

    case ActionType.PHOTO_BY_LABEL:
      return {
        ...state,
        photoByLabel: [
          ...state.photos.filter(
            (p) => p.labels.filter((label) => label.name === action.payload).length > 0
          ),
        ],
      };

    case ActionType.PHOTO_INIT_PHOTOS:
      return {
        ...state,
        initPhotos: true,
      };

    case ActionType.PHOTO_CHANGE_PHOTOS:
      return {
        ...state,
        initPhotos: false,
      };

    default:
      return state;
  }
};
