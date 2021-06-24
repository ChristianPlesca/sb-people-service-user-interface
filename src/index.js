import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import thunk from "redux-thunk";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;

const store = createStore(() => {}, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
