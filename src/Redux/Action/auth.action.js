

import * as ActionTypes from '../ActionTypes'

export const singUpAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNUP_USER, payload: data })
}

export const signInAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNIN_USER, payload: data })
}

export const signedInAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNEDIN_USER, payload: data })
}

export const SignOutAction = () => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNOUT_USER })
}

export const signedoutInAction = () => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNEDOUT_USER })
}

export const forgotAction = (data) => (dispatch) => {
    dispatch({type : ActionTypes.FORGOT_USER , payload : data})
    console.log(data);
}