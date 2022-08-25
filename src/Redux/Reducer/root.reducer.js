import { combineReducers } from "redux";
import { alertReducer } from "./Alert.reducer";
import { authReducer } from "./auth.reducer";



export const rootReducer = combineReducers({
    auth : authReducer,
    alert : alertReducer
})