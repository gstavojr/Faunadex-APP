import { Chat, ChatAction } from '../../interfaces/interfaces';
import { ActionType } from '../types/types';

const INITIAL_STATE: Chat = {
  messages: [],
};

export const chatReducer = (state: Chat = INITIAL_STATE, action: ChatAction): Chat => {
  switch (action.type) {
    case ActionType.CHAT_CLEANING:
      return {
        ...state,
        messages: [],
      };

    case ActionType.CHAT_MESSAGE_USER:
      return {
        ...state,
        messages: [...state.messages, { text: action.payload, source: 'USER' }],
      };
    case ActionType.CHAT_MESSAGE_BOT:
      return {
        ...state,
        messages: [...state.messages, { text: action.payload, source: 'BOT' }],
      };
    default:
      return state;
  }
};
