import {
  CONVERT_TRIGGERED,
  CONVERT_REQUEST,
  CONVERT_SUCCESS,
  CONVERT_FAILURE
} from "./actionType";

export const convertTriggered = currency => {
  return {
    type: CONVERT_TRIGGERED,
    payload: currency
  };
};

export const convertRequest = () => {
  return {
    type: CONVERT_REQUEST
  };
};

export const convertSuccess = data => {
  return {
    type: CONVERT_SUCCESS,
    payload: { data }
  };
};

export const convertFailure = err => {
  return {
    type: CONVERT_FAILURE,
    payload: { err }
  };
};
