import { ChatAction } from '../../interfaces/interfaces';
import { ActionType } from '../types/types';
import { Dispatch } from 'react';
import { RootState } from '../store/store';
import { serviceChatBot } from '../../helpers/serviceApi';

export const setMessageUser = (message: string): ChatAction => ({
  type: ActionType.CHAT_MESSAGE_USER,
  payload: message,
});

export const setMessageBot = (message: string): ChatAction => ({
  type: ActionType.CHAT_MESSAGE_BOT,
  payload: message,
});

export const startLoadingChat =
  (msg: string) => async (dispatch: Dispatch<ChatAction>, getState: () => RootState) => {
    const { token } = getState().auth;

    dispatch(setMessageUser(msg));
    const msgBot = await serviceChatBot(msg, token);
    dispatch(setMessageBot(msgBot));
  };
