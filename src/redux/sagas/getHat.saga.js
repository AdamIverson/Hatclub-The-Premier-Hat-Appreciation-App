import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getHats(action) {
  console.log(action);
  try {
    const response = yield axios({
      method: 'GET',
      url: '/api/hat',
    })
    yield put({
      type: 'SET_HATS',
      payload: response.data
    })
  } catch(error) {
    console.log('Error in GET from server:', error);
  }
}

export default function* getHatSaga() {
  yield takeLatest('GET_HATS', getHats)
}