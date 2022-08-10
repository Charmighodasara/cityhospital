import { createContext, useReducer } from "react";
import { TOGGLE_THEME } from "./ActionTypes";
import { themeReducer } from "./Reducer/ThemeReducer";

export const themeContext = createContext();

const initVal = {
    theme: 'light'
}

const ToggleContext = ({ children }) => {

    const [state, dispatch] = useReducer(themeReducer, initVal);

    const toggletheme = (val) => {
        let newTheme = val === 'light' ? 'dark' : 'light';
        dispatch({ type: TOGGLE_THEME, payload: newTheme })
    }

    return (
        <themeContext.Provider
            value={{
                ...state,
                toggletheme
            }}
        >
            {children}
        </themeContext.Provider>
    )
}

export default ToggleContext;