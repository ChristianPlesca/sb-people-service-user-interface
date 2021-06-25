import { LOGIN_USER, AUTH_FAILED, USERNAME_CHANGED } from "./types";

export const usernameChanged = (text) => ({
  type: USERNAME_CHANGED,
  payload: text,
});
