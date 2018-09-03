import * as actionTypes from '../actions';

const initialState = {
    resultss: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT:
            console.log('----- result reducer ------')
            return {
                ...state,
                resultss: state.resultss.concat({id: new Date(), value: action.result})
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            const updatedArray = state.resultss.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                resultss: updatedArray
            }
        default: 
            return state;    
    }
    
};

export default reducer;