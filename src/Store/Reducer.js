import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_ALL_FROM_CART } from "./Types";

const addProductToCart = (state, product) => {
  const copy = [...state.carts];
  const currentItemIndex = copy.findIndex((i) => i.product.id === product.id);

  if (currentItemIndex < 0) {
    copy.push({ product, quantity: 1 });
  } else {
    const copyItem = { ...copy[currentItemIndex] };
    copyItem.quantity++;
    copy[currentItemIndex] = copyItem;
  }
  // always  your state and update whatever you did
  return { ...state, carts: copy };
};

const removeProductFromCart = (state, productID) => {
  const copy = [...state.carts];
  const currentItemIndex = copy.findIndex((i) => i.product.id === product.id);

  if (currentItemIndex > 0) {
    const currentItem = { ...copy(currentItemIndex) };
    currentItem.quantity--;

    if (currentItem.quantity <= 0) {
      copy.splice(currentItemIndex, 1);
    } else {
      copy[currentItemIndex] = currentItem;
    }
  }
  return { ...state, carts: copy };
};

const clearCart = (state) => {
  return {
    ...state,
    carts: []
  };
};
export default (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addProductToCart(state, action.payload);
    case REMOVE_FROM_CART:
      return removeProductFromCart(state, action.payload);
    case CLEAR_ALL_FROM_CART:
      return clearCart(state);
    default:
      return state;
  }
};
