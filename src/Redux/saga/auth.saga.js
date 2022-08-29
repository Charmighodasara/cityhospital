import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { signInApi, signOutApi, signUpApi } from '../../commen/apis/auth.api';
import { history } from '../../history';
import { setAlert } from '../Action/Alert.action';
import { signedInAction } from '../Action/auth.action';
import * as ActionTypes from '../ActionTypes'

function* signUp(action) {
    try {
        const user = yield call(signUpApi, action.payload);
        console.log(user);
        //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
        yield put(setAlert({ text: user.payload, color: "success" }))
    } catch (e) {
        console.log(e);
        //   yield put({type: "USER_FETCH_FAILED", message: e.message});
        yield put(setAlert({ text: e.payload, color: "error" }))
    }
}

function* signIn(action) {
    try {
        const user = yield call(signInApi, action.payload);
        yield put(setAlert({ text: "Login Successfully ", color: "success" }))
        yield put(signedInAction(user))
        history.push('/')
        console.log(user);

    } catch (e) {
        console.log(e);
        yield put(setAlert({ text: e.payload, color: "error" }))
    }
}

function* signOut(action) {
    try {
        const user = yield call(signOutApi, action.payload)
        yield put(setAlert({ text: user.payload, color: "success" }))
        console.log(user);
    } catch (error) {
        console.log(error);
        yield put(setAlert({ text: error.payload, color: "error" }))
    }
}

export function* watchSignUp() {
    yield takeEvery(ActionTypes.SIGNUP_USER, signUp);
}

export function* watchSignIn() {
    yield takeEvery(ActionTypes.SIGNIN_USER, signIn)
}

export function* watchSignOut() {
    yield takeEvery(ActionTypes.SIGNOUT_USER, signOut)
}

export function* authSaga() {
    yield all([
        watchSignUp(),
        watchSignIn(),
        watchSignOut()
    ])
}
