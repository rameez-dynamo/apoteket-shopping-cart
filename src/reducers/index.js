import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_IN_PROGRESS,
  LOAD_PRODUCTS_FAILURE,
  ADD_ITEM_TO_CART,
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_IN_PROGRESS,
  GET_CART,
  GET_CART_FAILURE,
  GET_CART_SUCCESS,
  GET_CART_IN_PROGRESS,
} from '../constants';
import _ from 'lodash';

const initialState = {
  products: [],
  cart: [],
  loadProductsInProgress: false,
  addItemToCartInProgress: false,
  getCartInProgress: false,
  deleteCartInProgress: false,
};

const replaceObject = (arr, oldValue, newObject) => {
  var index = _.findIndex(arr, {id: 1});
  arr.splice(index, 1, newObject);
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOAD_PRODUCTS_IN_PROGRESS:
      return {
        ...state,
        loadProductsInProgress: true
      }

    case LOAD_PRODUCTS_SUCCESS:
      // console.log('Should update to new state', action)
      return {
        ...state,
        products: action.products,
        loadProductsInProgress: false
      };

    case LOAD_PRODUCTS_FAILURE:
      return {
        ...state,
        loadProductsInProgress: false
      };

    case ADD_ITEM_TO_CART_IN_PROGRESS:
      return {
        ...state,
        addItemToCartInProgress: true
      }

    case ADD_ITEM_TO_CART_SUCCESS:
      var newCart = Array.from(state.cart)
      var index = _.findIndex(newCart, (item) => {
        return item.Id == action.cartItem.Id;
      })

      if (index < 0) {
        newCart.push(action.cartItem)
      } else {
        var item = newCart[index];
        const newQuantity = item.Quantity + 1;
        newCart.splice(index, 1, {
          ...newCart,
          Quantity: newQuantity
        })
      }
      return {
        ...state,
        cart: newCart,
        addItemToCartInProgress: false
      }
    case ADD_ITEM_TO_CART_FAILURE:
      return {
        ...state,
        addItemToCartInProgress: false
      }

    case GET_CART_IN_PROGRESS:
      return {
        ...state,
        getCartInProgress: true
      }

    case GET_CART_SUCCESS:
      return {
        ...state,
        cart: action.cart,
        getCartInProgress: false
      }
    case GET_CART_FAILURE:
      return {
        ...state,
        getCartInProgress: false
      }

    default:
      return state;
  }
};

export default rootReducer;
