import { Label } from '../interfaces/interfaces';
import { serviceLabels, serviceDetectText } from './serviceApi';

export const getLabels = async (uId: number, token: string): Promise<Label[]> => {
  try {
    const { data } = await serviceLabels(uId, token);
    const { labels } = data.data;
    if (!Array.isArray(labels)) return [];

    const labelList: Label[] = labels.map((l) => ({
      id: l.idEtiqueta,
      name: l.nombre,
    }));
    return labelList;
  } catch (error) {
    return [];
  }
};

export const getDetectText = async (image: File, token: string): Promise<string> => {
  try {
    const { data } = await serviceDetectText(image, token);
    const { text } = data.data;
    return (text as string) !== '' ? (text as string) : 'No se reconocio texto';
  } catch (error) {
    return 'No se reconocio texto';
  }
};
