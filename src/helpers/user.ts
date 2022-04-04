import { Auth } from '../interfaces/interfaces';
import { serverLoginFaceID } from './serviceApi';

export const getToBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
  });
};

export const loginFaceId = async (user: string, foto: string): Promise<Auth | null> => {
  try {
    const { data } = await serverLoginFaceID(user, foto);
    const { idUsuario, token, usuario } = data;

    return {
      token: token,
      uId: idUsuario,
      userName: usuario,
      logged: true,
    };
  } catch (error) {
    return null;
  }
};
