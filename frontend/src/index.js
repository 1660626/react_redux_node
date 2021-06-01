import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import "./index.css";
import App from "./shared/App";
import store from "./shared/store/index";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "./shared/i18n";
import createHistory from "./shared/history";
const history = createHistory();


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
