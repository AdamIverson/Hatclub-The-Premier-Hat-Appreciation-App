import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addFav(action){  
  console.log('action.payload:', action.payload)
  
  try {
    const response = yield axios({
      method: 'POST',
      url: `/api/fav/`,
      data: action.payload
    })
    // call the dispatch that GETs the shelf items
    // yield put ({
    //   type: 'GET_FAVS'
    // })
  } catch(error) {
    console.log('error in POST: Client to Server', error);
  }
}

export default function* addFavSaga() {
  yield takeLatest('ADD_FAV', addFav)
}