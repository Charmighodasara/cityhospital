import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { signUpApi } from '../commen/apis/auth.api';

function* signUp(action) {
    try {
        const user = yield call(signUpApi, action.payload);
        //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
        //   yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

export function* watchSignUp() {
    yield takeEvery(ActionTypes.SIGNUP_USER, signUp);
}

export function* signUpSaga() {
    yield all([
        watchSignUp
    ])
}
