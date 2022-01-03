import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* editHat(action) {
  console.log("action.payload:", action.payload);

  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/hat/${action.payload}`,
      data: {
        description: action.payload.description,
        photo_url: action.payload.photo_url,
        hat_color: action.payload.hat_color,
        hat_style: action.payload.hat_style,
        hat_fabric: action.payload.hat_fabric,
        hat_vibe: action.payload.hat_vibe,
      },
    });
    yield put({
      type: "GET_HATS",
    });
  } catch (error) {
    window.alert("bummer");
  }
}

export default function* editHatSaga() {
  yield takeLatest("EDIT_HAT", editHat);
}
