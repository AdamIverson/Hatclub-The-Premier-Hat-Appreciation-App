// this dang thing allows a logged in user to delete a hat that they uploaded

import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* deleteHat(action) {
  console.log("deleteHat action.payload", action.payload);
  try {
    const response = yield axios({
      method: "DELETE",
      url: `/api/hat/${action.payload}`,
    });
    //action.payload will be req.params on the ^^ server side ^^
    // call the dispatch that GETs the shelf items
    yield put({
      type: "GET_HATS",
    });
  } catch (error) {
    window.alert("You are not authorized to delete this image.");
    // console.log("error deleting from Client to Server", error);
  }
}

export default function* deleteHatSaga() {
  yield takeLatest("DELETE_HAT", deleteHat);
}
