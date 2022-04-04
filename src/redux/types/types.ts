export enum ActionType {
  AUTH_LOGIN = '[AUTH] login',
  AUTH_LOGOUT = '[AUTH] logout',
  AUTH_REGISTER = '[AUTH] register',

  UI_START_LOADING = '[UI] Start loading',
  UI_FINISH_LOADING = '[UI] Finish loading',
  UI_SET_ERROR = '[UI] Set error',
  UI_REMOVE_ERROR = '[UI] Remove error',
  UI_OPEN_MODAL_LOGIN = '[UI] Open modal login',
  UI_CLOSE_MODAL_LOGIN = '[UI] Close modal login',
  UI_OPEN_MODAL_PHOTO = '[UI] Open modal photo',
  UI_CLOSE_MODAL_PHOTO = '[UI] Close modal photo',

  USER_GET_PROFILE = '[USER] GET profile',
  USER_MORE_ONE_ALBUMS = '[USER] Update count albums more one',
  USER_LESS_ONE_ALBUMS = '[USER] Update count albums less one',
  USER_CUSTOM_COUNT_PHOTO = '[USER] Update count custom photos',
  USER_MORE_ONE_PHOTOS = '[USER] Update count photos more one',
  USER_RESET_PROFILE = '[USER] Reset Profile',

  ALBUM_ADD_NEW = '[ALBUM] New album',
  ALBUM_ACTIVE = '[ALBUM] Set album active',
  ALBUM_LOAD = '[ALBUM] Load album',
  ALBUM_UPDATED = '[ALBUM] Update album',
  ALBUM_DELETE = '[ALBUM] Delete album',
  ALBUM_LOGOUT_CLEANING = '[ALBUM] Logout cleaning',

  PHOTO_LOAD = '[PHOTO] Load Photo',
  PHOTO_ACTIVE = '[PHOTO] Set photo active',
  PHOTO_LOGOUT_CLEANING = '[PHOTO] Logout cleaning',
  PHOTO_ADD_NEW = '[PHOTO] New photo',
  PHOTO_BY_LABEL = '[PHOTO] Photo by Label',
  PHOTO_DESACTIVE = '[PHOTO] Set photo desactive',
  PHOTO_INIT_PHOTOS = '[PHOTO] Photos intit ',
  PHOTO_CHANGE_PHOTOS = '[PHOTO] Photos intit change',

  LABEL_ACTIVE = '[LABEL] Set label active',
  LABEL_LOAD = '[LABEL] Load label',

  TRANSLATE_SET_TEXT = '[TRANSLATE] Set text translate',
  TRANSLATE_CLEANING = '[TRANSLATE] Cleaning Text',

  CHAT_MESSAGE_USER = '[CHAT] Set message user',
  CHAT_MESSAGE_BOT = '[CHAT] Set message bot',
  CHAT_CLEANING = '[CHAT] Cleaning Chat',
}
