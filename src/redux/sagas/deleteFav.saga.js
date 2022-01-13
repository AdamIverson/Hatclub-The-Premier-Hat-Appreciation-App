import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* deleteFav(action) {
  console.log("deleteFav.saga action.payload", action.payload.hat_id);
  try {
    const response = yield axios({
      method: "DELETE",
      url: `/api/fav/${action.payload.hat_id}`,
    });
    //action.payload will be req.params on the ^^ server side ^^
    // call the dispatch that GETs the shelf items
    yield put({
      type: "GET_FAVS",
    });
  } catch (error) {
    window.alert("You are not authorized to delete this image.");
    // console.log("error deleting from Client to Server", error);
  }
}

export default function* deleteFavSaga() {
  yield takeLatest("DELETE_FAV", deleteFav);
}
