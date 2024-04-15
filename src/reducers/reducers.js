import { START_COUNTDOWN, DECREMENT_COUNTDOWN } from '../actions/actions';

const initialState = {
    countdown: 30,
    textColor: 'black'
};

const countdownReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_COUNTDOWN:
            return {
                ...state,
                countdown: 30
            };
        case DECREMENT_COUNTDOWN:
            return {
                ...state,
                countdown: state.countdown - 1
            };
        default:
            return state;
    }
};


export default countdownReducer;