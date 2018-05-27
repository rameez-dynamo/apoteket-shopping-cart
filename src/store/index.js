import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

function configureStore() {
  return createStore(
    persistedReducer,
    applyMiddleware(thunk)
  );
}

let store = configureStore()
let persistor = persistStore(store)

module.exports = { store, persistor }
