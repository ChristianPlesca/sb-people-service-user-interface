import { ERROR_FETCHING_USERS, FETCH_USERS, INITIALIZE_FETCH } from "./types";
import users from "../apis/users";

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: INITIALIZE_FETCH });

  try {
    const response = await users.get();
    dispatch({ type: FETCH_USERS, payload: response.data });
  } catch (e) {
    console.log(e.message);
    dispatch({ type: ERROR_FETCHING_USERS, payload: e.message });
  }
};
