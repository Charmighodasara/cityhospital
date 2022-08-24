import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { signInApi, signUpApi } from '../../commen/apis/auth.api';
import * as ActionTypes from '../ActionTypes'

function* signUp(action) {
    try {
        const user = yield call(signUpApi, action.payload);
        console.log(user);
        //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
        console.log(e);
        //   yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* signIn(action) {
    try {
        const user = yield call(signInApi, action.payload);
        console.log(user);
    } catch (e) {
        console.log(e);
    }
}

export function* watchSignUp() {
    yield takeEvery(ActionTypes.SIGNUP_USER, signUp);
}

export function* watchSignIn() {
    yield takeEvery(ActionTypes.SIGNIN_USER, signIn)
}

export function* authSaga() {
    yield all([
        watchSignUp(),
        watchSignIn()
    ])
}
