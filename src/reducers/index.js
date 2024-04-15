import { combineReducers } from 'redux';
import authReducer from './authReducers';
import countdownReducer from './reducers';
import textColorReducer from './textReducers';

const rootReducer = combineReducers({
    auth: authReducer,
    countdown: countdownReducer,
    textColor: textColorReducer
    // Other reducers can be added here
});

export default rootReducer;