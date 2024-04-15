import {LOGIN_SUCCESS, LOGOUT, LOGIN_FAILED} from '../actions/authActionTypes';

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            console.log('AUTH REDUCER LOGIN_SUCCESS');
            return {
                ...state,
                isLoggedIn: true
            };
        case LOGIN_FAILED:
            console.log('AUTH REDUCER LOGIN_FAILED ');
            return {
                ...state,
                error: 'Wrong Credentials'
            };
        case LOGOUT:
            console.log('AUTH REDUCER LOGOUT');
            return {
                ...state,
                isLoggedIn: false
            };
        default:
            return state;
    }
};

export default authReducer;