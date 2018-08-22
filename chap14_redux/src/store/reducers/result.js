import * as actionTypes from '../actions'

const initialState = { 
  results: [] 
};

const reducer = (state = initialState, action) => {
    console.log('---- result reducer state.results -----')
    console.log(action.result)

  switch (action.type) {    
    case actionTypes.STORE_RESULT:
      return {
        ...state,  
        results: state.results.concat({id: new Date(), value: action.result})   // push() instead of concat() may generate unpredictable result
      };
    case actionTypes.DELETE_RESULT:
    //   This is one way of handling delete array in immutable way
    //   const id = 2;
    //   const newArray = [...state.results]   // copy an array
    //   newArray.splice(id, 1)

      const updatedArray = state.results.filter( result => result.id !== action.resultElId)
      return {
        ...state,  
        results: updatedArray,
      };     
    default:
      return state;
  }
};

export default reducer;
