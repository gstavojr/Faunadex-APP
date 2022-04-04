import { Action } from 'redux';
import { ActionType } from '../redux/types/types';

export interface UserRegister {
  username: string;
  name: string;
  lastname: string;
  password1: string;
  password2: string;
  photo?: any;
}

export interface AlbumUpdate {
  name: string;
  selected: number;
  option: string[];
}

export interface UserProfile {
  username: string;
  name: string;
  password1: string;
  photo?: any;
}

export interface Auth {
  userName: string;
  uId: number;
  token: string;
  logged: boolean;
}

export type AuthAction =
  | {
      type: ActionType.AUTH_LOGIN;
      payload: Auth;
    }
  | { type: ActionType.AUTH_LOGOUT };

export interface UI {
  loading: boolean;
  msgError: string;
  modalLoginOpen: boolean;
  modalPhotoOpen: boolean;
}

export type UiAction =
  | { type: ActionType.UI_REMOVE_ERROR }
  | { type: ActionType.UI_START_LOADING }
  | { type: ActionType.UI_FINISH_LOADING }
  | { type: ActionType.UI_OPEN_MODAL_LOGIN }
  | { type: ActionType.UI_CLOSE_MODAL_LOGIN }
  | { type: ActionType.UI_OPEN_MODAL_PHOTO }
  | { type: ActionType.UI_CLOSE_MODAL_PHOTO }
  | { type: ActionType.UI_SET_ERROR; payload: string };

export interface User {
  folders: number;
  name: string;
  photos: number;
  uId: number;
  urlFoto: string;
  userName: string;
  description: string;
}

export type UserAction =
  | { type: ActionType.USER_RESET_PROFILE }
  | { type: ActionType.USER_MORE_ONE_ALBUMS }
  | { type: ActionType.USER_LESS_ONE_ALBUMS }
  | { type: ActionType.USER_MORE_ONE_PHOTOS }
  | { type: ActionType.USER_CUSTOM_COUNT_PHOTO; payload: number }
  | { type: ActionType.USER_GET_PROFILE; payload: User };

export interface Album {
  id: number;
  name: string;
  // created: Date;
}

export interface Albums {
  albums: Album[];
  active: Album | null;
}

export type AlbumAction =
  | { type: ActionType.ALBUM_LOAD; payload: Album[] }
  | { type: ActionType.ALBUM_ACTIVE; payload: Album }
  | { type: ActionType.ALBUM_ADD_NEW; payload: Album }
  | { type: ActionType.ALBUM_UPDATED; payload: Album }
  | { type: ActionType.ALBUM_DELETE; payload: number }
  | { type: ActionType.ALBUM_LOGOUT_CLEANING };

export interface Photo {
  id: number;
  url: string;
  name: string;
  description: string;
  labels: Label[];
}

export interface PhotoUpload {
  image?: File;
  name: string;
  description: string;
  url?: string;
}
export interface Photos {
  active: Photo | null;
  photos: Photo[];
  photoByLabel: Photo[];
  initPhotos: boolean;
}
export type PhotoAction =
  | { type: ActionType.PHOTO_LOAD; payload: Photo[] }
  | { type: ActionType.PHOTO_ADD_NEW; payload: Photo }
  | { type: ActionType.PHOTO_ACTIVE; payload: Photo }
  | { type: ActionType.PHOTO_ACTIVE; payload: Photo }
  | { type: ActionType.PHOTO_BY_LABEL; payload: string }
  | { type: ActionType.PHOTO_DESACTIVE }
  | { type: ActionType.PHOTO_INIT_PHOTOS }
  | { type: ActionType.PHOTO_CHANGE_PHOTOS }
  | { type: ActionType.PHOTO_DESACTIVE }
  | { type: ActionType.PHOTO_LOGOUT_CLEANING };

export interface Label {
  id: number;
  name: string;
}
export interface Labels {
  labels: Label[];
  active?: Label;
}

export type LabelAction =
  | { type: ActionType.LABEL_LOAD; payload: Label[] }
  | { type: ActionType.LABEL_ACTIVE; payload: Label };

export interface Translate {
  text: string;
}

export type TranslateAction =
  | { type: ActionType.TRANSLATE_CLEANING }
  | { type: ActionType.TRANSLATE_SET_TEXT; payload: string };

export interface Message {
  text: string;
  source: 'BOT' | 'USER';
}

export interface Chat {
  messages: Message[];
}

export type ChatAction =
  | { type: ActionType.CHAT_CLEANING }
  | { type: ActionType.CHAT_MESSAGE_USER; payload: string }
  | { type: ActionType.CHAT_MESSAGE_BOT; payload: string };
