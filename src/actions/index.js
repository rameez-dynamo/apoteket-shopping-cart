import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILURE,
  LOAD_PRODUCTS_IN_PROGRESS,
  ADD_ITEM_TO_CART,
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_IN_PROGRESS,
  GET_CART,
  GET_CART_FAILURE,
  GET_CART_SUCCESS,
  GET_CART_IN_PROGRESS,
} from '../constants';
import api from '../api';

export const loadProducts = () => {
  return dispatch => {
    dispatch(loadProductsInProgress())
    var products = null
    api.getProductList().then((res) => {
      if (res instanceof Error) {
        console.error('Error getting product list', res)
        dispatch(loadProductsFailure(res))
      } else {
        console.log('Got product list', res)
        products = res
        dispatch(loadProductsSuccess(products));
      }
    }).catch((error) => {
      console.error('Error getting product list', error)
      dispatch(loadProductsFailure(error))
    })
  }
}
export const loadProductsInProgress = () => ({ type: LOAD_PRODUCTS_IN_PROGRESS });
export const loadProductsSuccess = products => ({ type: LOAD_PRODUCTS_SUCCESS, products });
export const loadProductsFailure = error => ({ type: LOAD_PRODUCTS_FAILURE, error });

export const addItemToCart = (cartItem) => {
  return dispatch => {
    dispatch(addItemToCartInProgress())
    api.addItemToCart(cartItem).then((res) => {
      if (res instanceof Error) {
        console.error('Error adding cart item', res)
        dispatch(addItemToCartFailure(res))
      } else {
        console.log('Added item to cart', res)
        dispatch(addItemToCartSuccess(cartItem));
      }
    }).catch((error) => {
      console.error('Error adding cart item', error)
      dispatch(addItemToCartFailure(error))
    })
  }
}

export const addItemToCartInProgress = () => ({type: ADD_ITEM_TO_CART_IN_PROGRESS});
export const addItemToCartSuccess = cartItem => ({type: ADD_ITEM_TO_CART_SUCCESS, cartItem });
export const addItemToCartFailure = error => ({type: ADD_ITEM_TO_CART_FAILURE, error });

export const getCart = () => {
  return dispatch => {
    dispatch(getCartInProgress())
    api.getCart().then((res) => {
      if (res instanceof Error) {
        console.error('Error getting cart', res)
        dispatch(getCartFailure(res))
      } else {
        console.log('Got cart', res)
        dispatch(getCartSuccess(res));
      }
    }).catch((error) => {
      console.error('Error getting cart', error)
      dispatch(getCartFailure(error))
    })
  }
}

export const getCartInProgress = () => ({type: GET_CART_IN_PROGRESS});
export const getCartSuccess = cart => ({type: GET_CART_SUCCESS, cart });
export const getCartFailure = error => ({type: GET_CART_FAILURE, error });
