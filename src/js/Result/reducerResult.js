import {
  CONVERT_REQUEST,
  CONVERT_SUCCESS,
  CONVERT_FAILURE
} from "./actionType";

const initState = {
  error: null,
  isLoading: false,
  data: {}
};

const reducerResult = (state = initState, action) => {
  switch (action.type) {
    case CONVERT_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case CONVERT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload.data
      };
    case CONVERT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.err
      };
    default:
      return state;
  }
};

export default reducerResult;
