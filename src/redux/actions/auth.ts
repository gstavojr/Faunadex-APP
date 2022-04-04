import { Dispatch } from 'redux';

import { ActionType } from '../types/types';
import { AuthAction, UiAction, UserRegister } from '../../interfaces/interfaces';
import { serverLogin, serverRegister } from '../../helpers/serviceApi';
import { startLoading, finishLoading, setError, removeError } from './ui';

import Swal from 'sweetalert2';
import { loginFaceId } from '../../helpers/user';

type ActionsType = AuthAction | UiAction;
// =============================================================================
// DISPATCH ACCIONS
// =============================================================================
export const login = (userName: string, uId: number, token: string): AuthAction => {
  return {
    type: ActionType.AUTH_LOGIN,
    payload: {
      userName,
      uId,
      token,
      logged: true,
    },
  };
};
export const logout = (): AuthAction => ({
  type: ActionType.AUTH_LOGOUT,
});

// =============================================================================
// DISPATCH ACCIONS ASINCRONAS
// =============================================================================

export const startLogin =
  (userName: string, password: string) => async (dispatch: Dispatch<ActionsType>) => {
    try {
      dispatch(startLoading());

      // LOGIN
      const { data } = await serverLogin(userName, password);
      const { idUsuario, token, usuario } = data;
      dispatch(login(usuario, idUsuario, token));

      dispatch(finishLoading());
    } catch (e: any) {
      dispatch(setError('Error al iniciar sesion'));
      dispatch(removeError());
      dispatch(finishLoading());
      Swal.fire('Error', 'Usuario o Contraseña invalidas', 'error');
    }
  };

export const startLoginFaceId =
  (user: string, foto: string) => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(startLoading());

    // LOGIN
    const data = await loginFaceId(user, foto);
    if (!data) {
      // error
      dispatch(setError('Error al iniciar sesion'));
      dispatch(removeError());
      dispatch(finishLoading());
      Swal.fire('Error', 'Usuario o foto invalida', 'error');
      return;
    }
    const { userName, uId, token } = data;
    dispatch(login(userName, uId, token));

    dispatch(finishLoading());
  };

export const startRegister =
  (user: UserRegister) => async (dispatch: Dispatch<ActionsType>) => {
    try {
      dispatch(startLoading());
      const { data } = await serverRegister(user);
      const { idUsuario, token, usuario } = data;
      dispatch(login(usuario, idUsuario, token));

      dispatch(finishLoading());
    } catch (e) {
      dispatch(finishLoading());
      Swal.fire('Error', 'El nombre de usuario ya existe', 'error');
    }
  };
