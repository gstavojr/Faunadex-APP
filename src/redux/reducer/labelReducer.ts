import { Labels, LabelAction } from '../../interfaces/interfaces';
import { ActionType } from '../types/types';

const INITIAL_STATE: Labels = {
  labels: [],
  active: undefined,
};

export const labelReducer = (
  state: Labels = INITIAL_STATE,
  action: LabelAction
): Labels => {
  switch (action.type) {
    case ActionType.LABEL_LOAD:
      return {
        ...state,
        labels: [
          ...action.payload.sort((a, b) => {
            return a.name.localeCompare(b.name);
          }),
        ],
      };
    case ActionType.LABEL_ACTIVE:
      return {
        ...state,
        active: action.payload,
      };
    default:
      return state;
  }
};
