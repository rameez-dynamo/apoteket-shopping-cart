import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILURE,
  LOAD_PRODUCTS_IN_PROGRESS,
} from '../constants';
import api from '../api';

export const loadProducts = () => {
  return dispatch => {
    dispatch(loadProductsInProgress())
    var products = null
    api.getProductList().then((res) => {
      console.log('Got product list', res)
      products = res
      dispatch(loadProductsSuccess(products));
    }).catch((error) => {
      console.error('Error getting product list', error)
    })
  }
}
export const loadProductsInProgress = () => ({ type: LOAD_PRODUCTS_IN_PROGRESS });
export const loadProductsSuccess = products => ({ type: LOAD_PRODUCTS_SUCCESS, products });
export const loadProductsFailure = payload => ({ type: LOAD_PRODUCTS_FAILURE, payload });
