import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/index";
import App from "./App";
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
// registerServiceWorker();
