import {
  ALL_CURRENCIES_TRIGGERED,
  ALL_CURRENCIES_REQUEST,
  ALL_CURRENCIES_SUCCESS,
  ALL_CURRENCIES_FAILURE
} from "./actionType";

export const allCurrenciesTriggered = () => {
  return {
    type: ALL_CURRENCIES_TRIGGERED
  };
};

export const allCurrenciesRequest = () => {
  return {
    type: ALL_CURRENCIES_REQUEST
  };
};

export const allCurrenciesSuccess = data => {
  return {
    type: ALL_CURRENCIES_SUCCESS,
    payload: { data }
  };
};

export const allCurrenciesFailure = err => {
  return {
    type: ALL_CURRENCIES_FAILURE,
    payload: { err }
  };
};
