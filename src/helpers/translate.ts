import { serviceTranslate } from './serviceApi';
import { Translate } from '../interfaces/interfaces';

export const getTranslate = async (
  text: string,
  idioma: string,
  token: string
): Promise<Translate> => {
  const { data } = await serviceTranslate(text, idioma, token);
  const translate: Translate = {
    text: data.translation,
  };
  return translate;
};
