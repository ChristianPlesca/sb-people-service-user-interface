import {
  LOGIN_USER,
  AUTH_FAILED,
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
} from "./types";

export const usernameChanged = (text) => ({
  type: USERNAME_CHANGED,
  payload: text,
});

export const passwordChanged = (text) => ({
  type: PASSWORD_CHANGED,
  payload: text,
});
