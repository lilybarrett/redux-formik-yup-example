import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { loadIngredients } from "../src/redux/modules/ingredients";
import store from "../src/redux/store";
import App from "./components/App";

store.dispatch(loadIngredients());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
