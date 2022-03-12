import { ADD_TO_CART, CHECKOUT_REQUEST, CHECKOUT_FAILURE } from "../constants/ActionTypes";

const initialstate = {
  addedIds: [],
  quantityById: {},
};

// Reducers for corresponding Actions
const cart = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addId = [...state.addedIds, action.productId];
      const count = action.productId;
      let quant = { ...state.quantityById };
      quant[action.productId] = 1;
      return { ...state, addedIds: addId, quantityById: quant };

    case CHECKOUT_REQUEST:
      return state;

    case CHECKOUT_FAILURE:
      const text = "cart state";
      return text;

    default:
      return state;
  }
};

export default cart;
