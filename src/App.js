import React from "react";
import GithubOauth from "./container/GithubOath";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import dataReducer from "./redux/reducer";

const store = createStore(dataReducer);
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GithubOauth />
    </BrowserRouter>
  </Provider>
);

export default App;
