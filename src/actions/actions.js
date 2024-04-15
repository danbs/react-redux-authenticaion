import {CHANGE_TEXT_COLOR} from './actionTypes';

export const START_COUNTDOWN = 'START_COUNTDOWN';
export const DECREMENT_COUNTDOWN = 'DECREMENT_COUNTDOWN';


export const startCountdown = () => ({
    type: START_COUNTDOWN
});

export const decrementCountdown = () => ({
    type: DECREMENT_COUNTDOWN
});

export const changeTextColor = (color) => ({
    type: CHANGE_TEXT_COLOR,
    payload: color
});