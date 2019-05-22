import {
  ALL_CURRENCIES_REQUEST,
  ALL_CURRENCIES_SUCCESS,
  ALL_CURRENCIES_FAILURE
} from "./actionType";

const initState = {
  error: null,
  isLoading: false,
  data: {}
};

const reducerHome = (state = initState, action) => {
  switch (action.type) {
    case ALL_CURRENCIES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case ALL_CURRENCIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload.data
      };
    case ALL_CURRENCIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.err
      };
    default:
      return state;
  }
};

export default reducerHome;
