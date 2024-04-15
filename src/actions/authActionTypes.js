import {users} from "../credentials";

export const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGOUT = 'LOGOUT';
export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS
    };
};

export const loginFailed = () => {
    console.log('loginFailed')
    return {
        type: LOGIN_FAILED
    };
};

export const logout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    return {
        type: LOGOUT
    };
};

export const login = (email, password) => {
    return dispatch => {
        setTimeout(() => {
            // console.log('init login check ', users);
            if (isValidCredentials(email, password)) {
                // console.log('Success');
                localStorage.setItem('isLoggedIn', 'true');
                dispatch(loginSuccess());

            } else {
                // console.log('Failed');
                dispatch(loginFailed());
            }
        }, 1000);
    };
};

const isValidCredentials = (email, password) => {
    return users.find(user => user.email === email && user.password === password);
};