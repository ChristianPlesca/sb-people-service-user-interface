import { LOGIN_USER, AUTH_FAILED } from "../actions/types";

const INITIAL_STATE = {
  username: "",
  password: "",
  error: "",
  loading: false,
  token: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return null;
    case AUTH_FAILED:
      return null;
    default:
      return state;
  }
};
