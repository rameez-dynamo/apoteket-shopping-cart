import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'cart'
  ],
  blacklist: [
    'loadProductsInProgress',
    'addItemToCartInProgress',
    'getCartInProgress',
    'deleteCartInProgress'
  ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);
export const persistor = persistStore(store)
