import { LOAD_PRODUCTS }

const initialState = {
  products: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      state.articles.push(action.payload);
      return state;
    default:
      return state;
  }
};

export default rootReducer;
