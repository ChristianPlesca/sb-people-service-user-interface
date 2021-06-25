import { FETCH_USERS, INITIALIZE_FETCH, ERROR_FETCHING_USERS } from "../actions/types";

const INITIAL_STATE = {
  results: [],
  loading: false,
  noResultsFound: false,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, results: action.payload };
    case INITIALIZE_FETCH:
      return { ...state, loading: true };
    case ERROR_FETCHING_USERS:
      return {...state, error: action.payload, loading: false}
    default:
      return state;
  }
};
