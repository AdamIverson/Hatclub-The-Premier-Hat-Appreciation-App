import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getOneHat(action) {
  console.log('fetchOneHat.saga action.payload:', action.payload);
  try {
    const response = yield axios({
      method: "GET",
      url: `/api/fetchOneHat/${action.payload}`,
    });
    yield put({
      type: "SET_ONE_HAT",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error in GET from server:", error);
  }
}

export default function* getOneHatSaga() {
  yield takeLatest("FETCH_ONE_HAT", getOneHat);
}