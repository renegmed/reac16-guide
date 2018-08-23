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

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
          ...state,                         // copy of current state plus replaced ingredients below
          ingredients: {
              ...state.ingredients,                                                 // copy all properties
              [action.ingredientName]: state.ingredients[action.ingredientName] + 1 // then replace the property specified by action with incremented ingredient value  
          },
          totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,                         // copy of current state plus replaced ingredients below
        ingredients: {
            ...state.ingredients,                                                 // copy all properties
            [action.ingredientName]: state.ingredients[action.ingredientName] - 1 // then replace the property specified by action with decremented ingredient value  
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      };
    default:
      return state;
  }
};

export default reducer;
