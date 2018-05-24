import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_IN_PROGRESS,
  LOAD_PRODUCTS_FAILURE,
} from '../constants';

const initialState = {
  products: [],
  loadProductsInProgress: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOAD_PRODUCTS_IN_PROGRESS:
      return {
        ...state,
        loadProductsInProgress: true
      }

    case LOAD_PRODUCTS_SUCCESS:
      console.log('Should update to new state', action)
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

    default:
      return state;
  }
};

export default rootReducer;
