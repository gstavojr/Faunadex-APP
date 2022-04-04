import { TranslateAction, UiAction } from '../../interfaces/interfaces';
import { ActionType } from '../types/types';
import { Dispatch } from 'react';
import { RootState } from '../store/store';
import { getTranslate } from '../../helpers/translate';
import { getDetectText } from '../../helpers/label';
import { finishLoading, startLoading } from './ui';

export const setTranslateText = (text: string): TranslateAction => ({
  type: ActionType.TRANSLATE_SET_TEXT,
  payload: text,
});

export const translateClear = (): TranslateAction => ({
  type: ActionType.TRANSLATE_CLEANING,
});

export const startLoadingTranslate =
  (text: string, idioma: string) =>
  async (dispatch: Dispatch<TranslateAction>, getState: () => RootState) => {
    const { token } = getState().auth;
    const translate = await getTranslate(text, idioma, token);

    dispatch(setTranslateText(translate.text));
  };

// TODO: TERMINAR INTERFAZ DEL DETECT TEXT
// TODO: Chatbot
export const startLoadingDetectText =
  (image: File) =>
  async (dispatch: Dispatch<TranslateAction | UiAction>, getState: () => RootState) => {
    const { token } = getState().auth;
    dispatch(startLoading());
    const text = await getDetectText(image, token);
    dispatch(setTranslateText(text));
    dispatch(finishLoading());
  };
