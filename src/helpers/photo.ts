import { Label, Photo, PhotoUpload } from '../interfaces/interfaces';
import { servicePhotoByUid, servicePhotoNew } from './serviceApi';

export const getPhotosByUid = async (token: string, uID: number): Promise<Photo[]> => {
  try {
    const { data } = await servicePhotoByUid(uID, token);
    const { data: photos } = data;

    if (!Array.isArray(photos)) return [];

    const photoArray: Photo[] = photos.map(({ photo: p, labels }: any) => ({
      id: p.idFoto,
      url: p.urlFoto,
      name: p.nombre,
      description: p.description ? p.description : '',
      labels: getLabelList(labels),
    }));
    return photoArray;
  } catch (e) {
    return [];
  }
};

const getLabelList = (labelList: any[]): Label[] => {
  return labelList.map((l) => ({
    id: l.idEtiqueta,
    name: l.nombre,
  }));
};

export const savePhotoByAlbm = async (
  token: string,
  photo: PhotoUpload,
  uId: number
): Promise<Photo | null> => {
  try {
    const { data } = await servicePhotoNew(photo, token, uId);
    const { urlFoto, nombre, idFoto } = data.data.photo;
    return {
      id: idFoto,
      url: urlFoto,
      name: nombre,
      description: '',
      labels: [],
    };
  } catch (error) {
    return null;
  }
};
