import React from "react";
import ReactDOM from "react-dom";
import ReduxProvider from "./Redux/ReduxProvider";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./Redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </Provider>,
  rootElement
);

