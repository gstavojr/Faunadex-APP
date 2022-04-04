import { Dispatch } from 'react';
import { getPhotosByUid, savePhotoByAlbm } from '../../helpers/photo';

import {
  Photo,
  PhotoAction,
  PhotoUpload,
  UserAction,
  LabelAction,
} from '../../interfaces/interfaces';
import { RootState } from '../store/store';
import { ActionType } from '../types/types';

import Swal from 'sweetalert2';
import { oneMorePhoto } from './user';
import { getLabels } from '../../helpers/label';
import { setLabels } from './label';

type DispatchType = PhotoAction | UserAction | LabelAction;

export const setPhotos = (albums: Photo[]): PhotoAction => ({
  type: ActionType.PHOTO_LOAD,
  payload: albums,
});

export const photoLogout = (): PhotoAction => ({
  type: ActionType.PHOTO_LOGOUT_CLEANING,
});

export const activePhoto = (photo: Photo): PhotoAction => ({
  type: ActionType.PHOTO_ACTIVE,
  payload: photo,
});

export const desactivePhoto = (): PhotoAction => ({
  type: ActionType.PHOTO_DESACTIVE,
});

export const addNewPhoto = (photo: Photo): PhotoAction => ({
  type: ActionType.PHOTO_ADD_NEW,
  payload: photo,
});

export const addPhotosByLabel = (labelName: string): PhotoAction => ({
  type: ActionType.PHOTO_BY_LABEL,
  payload: labelName,
});

export const initPhoto = (): PhotoAction => ({
  type: ActionType.PHOTO_INIT_PHOTOS,
});

export const changePhoto = (): PhotoAction => ({
  type: ActionType.PHOTO_CHANGE_PHOTOS,
});

export const startLoadingPhotos =
  () => async (dispatch: Dispatch<PhotoAction>, getState: () => RootState) => {
    const { token, uId } = getState().auth;
    const photos = await getPhotosByUid(token, uId);

    dispatch(setPhotos(photos));
  };

export const startSavePhoto =
  (photo: PhotoUpload) =>
  async (dispatch: Dispatch<DispatchType>, getState: () => RootState) => {
    const { token, uId } = getState().auth;
    const resPhoto = await savePhotoByAlbm(token, photo, uId);

    if (resPhoto) {
      dispatch(addNewPhoto(resPhoto));
      dispatch(activePhoto(resPhoto));
      dispatch(oneMorePhoto());
      const labels = await getLabels(uId, token);
      dispatch(setLabels(labels));
      Swal.fire(
        'Exitoso',
        `Se agrego una nueva foto con el nombre "${photo.name}"`,
        'success'
      );
    } else {
      Swal.fire('Error', 'Error al subir la foto', 'error');
    }
  };
