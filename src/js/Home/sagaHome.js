import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { ALL_CURRENCIES_TRIGGERED } from "./actionType";
import {
  allCurrenciesRequest,
  allCurrenciesSuccess,
  allCurrenciesFailure
} from "./actionHome";

export function* homeSaga() {
  try {
    yield put(allCurrenciesRequest());

    let response = yield call(
      [axios, axios.get],
      `https://apiv2.bitcoinaverage.com/constants/exchangerates/global`
    );
    yield console.log("homeSaga - response.data:", response.data);

    if (response.status === 200) {
      yield put(allCurrenciesSuccess(response.data));
    } else {
      yield put(allCurrenciesFailure(response.message));
    }
  } catch (e) {
    console.error("Ooops! Request fail.", e);
    yield put(allCurrenciesFailure(e));
  }
}

export default function* watchHomeSaga() {
  yield takeLatest(ALL_CURRENCIES_TRIGGERED, homeSaga);
}
