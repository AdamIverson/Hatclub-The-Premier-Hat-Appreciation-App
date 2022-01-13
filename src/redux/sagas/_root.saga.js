import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import addHatSaga from './addHat.saga';
import getHatSaga from './getHat.saga';
import deleteHatSaga from './deleteHat.saga';
import editHatSaga from './editHat.saga';
import getFavSaga from './getFav.saga';
import addFavSaga from './addFav.saga';
import getUserHatSaga from './getUserHats.saga';
import getOneHatSaga from './fetchOneHat.saga';
import deleteFavSaga from './deleteFav.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    addHatSaga(),
    getHatSaga(),
    deleteHatSaga(),
    editHatSaga(),
    getFavSaga(),
    addFavSaga(),
    getUserHatSaga(),
    getOneHatSaga(),
    deleteFavSaga(),
  ]);
}
