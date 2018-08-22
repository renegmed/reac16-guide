// This will be called by nodejs
//   $ node redux-basic.js  
//
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

// Reducer - only entity that updates store
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,   // copy current state
            counter: state.counter + 1   // create new counter based on state.counter
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,   // copy current state
            counter: state.counter + action.value   // create new counter based on state.counter
        };
    }

    return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());


// Subscription
store.subscribe( () => {
    console.log('[Subscription]', store.getState());
});

// Dispatching Action
store.dispatch({ type: 'INC_COUNTER' });
console.log(store.getState());  // results to 1

store.dispatch({ type: 'ADD_COUNTER', value: 10 });

console.log(store.getState());  // results to 11 - INC_COUNTER + ADD_COUNTER results

