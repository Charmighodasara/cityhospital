

import * as ActionTypes from '../ActionTypes'

export const singUpAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNUP_USER, payload: data })
}

export const signInAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNIN_USER, payload: data })
}

export const SignOutAction = () => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNOUT_USER })
}