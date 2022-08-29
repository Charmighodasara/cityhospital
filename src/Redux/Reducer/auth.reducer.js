import * as ActionTypes from '../ActionTypes'

const initValue = {
    isLoading: false,
    user: null,
    error: ''
}

export const authReducer = (state = initValue, action) => {
    switch (action.type) {
        case ActionTypes.SIGNEDIN_USER:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: ''
            }
        default:
            return state;
    }

}