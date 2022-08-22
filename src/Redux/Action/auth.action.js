

import * as ActionTypes from '../ActionTypes'

export const singUpAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNUP_USER, payload: data })
}