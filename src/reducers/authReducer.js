import { LOGIN_USER, AUTH_FAILED, USERNAME_CHANGED } from "../actions/types";

const INITIAL_STATE = {
  username: "",
  password: "",
  error: "",
  loading: false,
  token: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERNAME_CHANGED:
      return { ...state, username: action.payload };
    case LOGIN_USER:
      return null;
    case AUTH_FAILED:
      return null;
    default:
      return state;
  }
};
