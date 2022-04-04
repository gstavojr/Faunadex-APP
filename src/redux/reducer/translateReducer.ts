import { Translate, TranslateAction } from '../../interfaces/interfaces';
import { ActionType } from '../types/types';

const INITIAL_STATE: Translate = {
  text: '',
};

export const translateReducer = (
  state: Translate = INITIAL_STATE,
  action: TranslateAction
): Translate => {
  switch (action.type) {
    case ActionType.TRANSLATE_SET_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case ActionType.TRANSLATE_CLEANING:
      return {
        ...state,
        text: '',
      };
    default:
      return state;
  }
};
