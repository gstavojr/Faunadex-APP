import { Label, LabelAction } from '../../interfaces/interfaces';
import { ActionType } from '../types/types';
import { Dispatch } from 'react';
import { RootState } from '../store/store';
import { getLabels } from '../../helpers/label';

export const setLabels = (labels: Label[]): LabelAction => ({
  type: ActionType.LABEL_LOAD,
  payload: labels,
});

export const activeLabel = (label: Label): LabelAction => ({
  type: ActionType.LABEL_ACTIVE,
  payload: label,
});

export const startLoadingLabel =
  () => async (dispatch: Dispatch<LabelAction>, getState: () => RootState) => {
    const { token, uId } = getState().auth;
    const labels = await getLabels(uId, token);
    dispatch(setLabels(labels));
  };
