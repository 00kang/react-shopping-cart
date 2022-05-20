import { actionTypes } from '../actionTypes';

const initialState = {
  cart: [],
};

function cartReducer(state = initialState, action) {
  if (action.type === actionTypes.ADD_CART) {
    return { ...state, cart: [...state.cart, action.payload] };
  }
  return state;
}

export default cartReducer;
