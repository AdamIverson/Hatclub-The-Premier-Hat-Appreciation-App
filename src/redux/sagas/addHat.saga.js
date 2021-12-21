import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addHat(action){
  console.log(action)
  try {
    const response = yield axios({
      method: 'POST',
      url: '/api/hat',
      data: action.payload
    })
    // call the dispatch that GETs the shelf items
    yield put ({
      type: 'GET_HATS'
    })
  } catch(error) {
    console.log('error in POST: Client to Server', error);
  }
}

export default function* addHatSaga() {
  yield takeLatest('ADD_HAT', addHat)
}