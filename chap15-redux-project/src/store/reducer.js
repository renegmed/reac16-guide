import * as actionTypes from "./actions";

const initialState = {
  ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
  },
  totalPrice: 4
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
          ...state,                         // copy of current state plus replaced ingredients below
          ingredients: {
              ...state.ingredients,                                                 // copy all properties
              [action.ingredientName]: state.ingredients[action.ingredientName] + 1 // then replace the property specified by action with incremented ingredient value  
          }
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,                         // copy of current state plus replaced ingredients below
        ingredients: {
            ...state.ingredients,                                                 // copy all properties
            [action.ingredientName]: state.ingredients[action.ingredientName] - 1 // then replace the property specified by action with decremented ingredient value  
        }
      };
    default:
      return state;
  }
};

export default reducer;
