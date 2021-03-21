import {
  ADD_TO_CART,
  UPDATE_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
} from "../actions/types";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {
      line_items: [],
      totalItems: 0,
      total: 0,
    };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
    case UPDATE_TO_CART:
    case REMOVE_FROM_CART:
    case EMPTY_CART: {
      let newState = {
        ...state,
        ...action.payload,
      };
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
};

export default authReducer;
