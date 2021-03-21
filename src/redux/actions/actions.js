import {
  ADD_TO_CART,
  EMPTY_CART,
  UPDATE_TO_CART,
  REMOVE_FROM_CART,
} from "./types";
import products from "../../products";

// CREATE YOUR ACTION'S FUNCTION HERE
export const handleAddToCart = (productId, quantity, cart) => {
  let newCart = {};
  let a = cart.line_items.filter((item) => productId === item.id);

  if (!a.length) {
    let item = { ...products.filter((p) => p.id === productId)[0], quantity };
    cart.line_items.push(item);
    newCart = {
      ...cart,
      totalItems: cart.line_items.length,
      total: getTotal(cart),
    };
  }

  return {
    type: ADD_TO_CART,
    payload: newCart,
  };
};

export const handleUpdateCartQty = (productId, quantity, cart) => {
  let newCart = {};

  if (quantity === 0) {
    cart.line_items.splice(productId, 1);
  } else {
    let item = { ...products.filter((item) => productId === item.id)[0], quantity };
    let index = cart.line_items.findIndex((item) => item.id === productId);
    cart.line_items[index] = item
  }

  newCart = {
    ...cart,
    totalItems: cart.line_items.length,
    total: getTotal(cart),
  };

  return {
    type: UPDATE_TO_CART,
    payload: newCart,
  };
};

export const handleRemoveFromCart = (productId, cart) => {
  cart.line_items.splice(productId, 1);
  return {
    type: REMOVE_FROM_CART,
    payload: {
      ...cart,
      totalItems: cart.line_items.length,
      total: getTotal(cart),
    },
  };
};

export const handleEmptyCart = () => {
  return {
    type: EMPTY_CART,
    payload: {
      line_items: [],
      totalItems: 0,
      total: 0,
    },
  };
};

const getTotal = (cart) => {
  let total = 0;
  total = cart.line_items.map((item) => item.price * item.quantity);
  total = total.reduce((a, b) => a + b, 0);
  return total;
};
