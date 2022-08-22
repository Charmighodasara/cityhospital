

import { all } from 'redux-saga/effects'
import { signUpSaga } from './auth.saga'

export function* rootSaga() {
    yield all([
        signUpSaga()
    ])
}