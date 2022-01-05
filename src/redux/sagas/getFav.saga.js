import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getFavs(action) {
  console.log('*************************');
  
  console.log('action:', action);
  try {
    const response = yield axios({
      method: 'GET',
      url: '/api/fav',
    })
    yield put({
      type: 'SET_FAVS',
      payload: response.data
    })
  } catch(error) {
    console.log('Error in GET from server:', error);
  }
}

export default function* getFavSaga() {
  yield takeLatest('GET_FAVS', getFavs)
}