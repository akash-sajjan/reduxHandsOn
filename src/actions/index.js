import shop from "../api/shop";
import * as types from "./constants/ActionTypes";

const receiveProducts = (products) => ({
  type: types.RECEIVE_PRODUCTS,
  products,
});

export const getallProducts = () => (dispatch) => {
  shop.getProducts((products) => {
    dispatch(receiveProducts(products));
  });
};
const addToCartUnsafe = (productId) => ({
  type: types.ADD_TO_CART,
  productId,
});

export const addToCart = (productId) => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartunsafe(productId));
  }
};

export const checkout = (products) => (dispatch, getState) => {
  const { cart } = getState();

  dispatch({
    type: types.CHECKOUT_REQUEST,
  });
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart,
    });
  });
};
