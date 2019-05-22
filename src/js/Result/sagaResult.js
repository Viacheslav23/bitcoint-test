import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { CONVERT_TRIGGERED } from "./actionType";
import { convertRequest, convertSuccess, convertFailure } from "./actionResult";

export function* sagaResult(action) {
  try {
    yield put(convertRequest());

    let response = yield call(
      [axios, axios.get],
      `https://apiv2.bitcoinaverage.com/indices/global/ticker/short?crypto=BTC&fiat=${
        action.payload
      }`
    );
    yield console.log("action.currency:", action.payload);
    yield console.log("homeSaga - response.data:", response.data);

    if (response.status === 200) {
      yield put(convertSuccess(response.data));
    } else {
      yield put(convertFailure(response.message));
    }
  } catch (e) {
    console.error("Ooops! Request fail.", e);
    yield put(convertFailure(e));
  }
}

export default function* watchSagaResult() {
  yield takeLatest(CONVERT_TRIGGERED, sagaResult);
}
