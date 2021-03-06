// sends out the bat signal to get a user's uploaded hats
// for display on the profile page

import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getUserHats(action) {
  console.log(action);
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/userHat",
    });
    yield put({
      type: "SET_USER_HATS",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error in GET from server:", error);
  }
}

export default function* getUserHatSaga() {
  yield takeLatest("GET_USER_HATS", getUserHats);
}
