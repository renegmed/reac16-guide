import * as actionTypes from '../actions';

const initialState = {
    counterzzz: 0
};

const reducer = ( state = initialState, action ) => {
    ///console.log('..... counter. reducer .....')
    switch ( action.type ) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counterzzz = state.counterzzz + 1;
            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state,
                counterzzz: state.counterzzz - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counterzzz: state.counterzzz + action.val
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counterzzz: state.counterzzz- action.val
            }
        default: 
            return state;    
    }
    
};

export default reducer;