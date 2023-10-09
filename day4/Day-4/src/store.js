import { createStore } from 'redux';

// Define initial state
const initialState = {
  };

// Define reducer function
const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return { ...state, user: action.payload };
    
    default:
      return state;
  }
};

// Create store
const store = createStore(formReducer);

export default store;