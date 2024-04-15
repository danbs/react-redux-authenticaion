import { SET_IS_LOGGED_IN, LOGOUT } from './authActionTypes';

export const setIsLoggedIn = (isLoggedIn) => {
    return {
        type: SET_IS_LOGGED_IN,
        payload: isLoggedIn
    };
};

export const logout = () => {
    return {
        type: LOGOUT

    };
};