import { createStore } from "redux";
import rootReducer from "../reducers/index";

var store = createStore(rootReducer);

export default store;
