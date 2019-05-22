import { all } from "redux-saga/effects";

import { watchHomeSaga } from "../js/Home";
import { watchSagaResult } from "../js/Result";
// import { watchLoginSaga } from "../js/Login";

export default function*() {
  yield all([
    watchHomeSaga(),
    watchSagaResult()
    //   watchLoginSaga()
  ]);
}
