import { CHANGE_TEXT_COLOR } from '../actions/actionTypes';

const initialState = {
    textColor: 'black'
};


const textColorReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TEXT_COLOR:
            return {
                ...state,
                textColor: action.payload
            };
        default:
            return state;
    }
};

export default textColorReducer;