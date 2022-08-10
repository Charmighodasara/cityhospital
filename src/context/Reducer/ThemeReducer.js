
import { TOGGLE_THEME } from "../ActionTypes";

export const themeReducer = (state, action) => {
    console.log(action.type, action.payload)

    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                theme: action.payload
            }

        default:
            return state
    }
}