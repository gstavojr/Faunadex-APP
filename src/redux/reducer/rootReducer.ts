import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { uiReducer } from './uiReducer';
import { userReducer } from './userReducer';
import { albumReducer } from './albumReducer';
import { photoReducer } from './photoReducer';
import { labelReducer } from './labelReducer';
import { translateReducer } from './translateReducer';
import { chatReducer } from './chatReducer';

export const rootReducer = combineReducers({
  album: albumReducer,
  auth: authReducer,
  chat: chatReducer,
  label: labelReducer,
  photo: photoReducer,
  translate: translateReducer,
  ui: uiReducer,
  user: userReducer,
});
