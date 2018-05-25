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

const initialState = {
  products: [],
  cart: [],
  loadProductsInProgress: false,
  addItemToCartInProgress: false,
  getCartInProgress: false,
  deleteCartInProgress: false,
};

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
      newCart.push(action.cartItem)
      // console.log('Adding item to state cart', action.cartItem, newCart) 
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
