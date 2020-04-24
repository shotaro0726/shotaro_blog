import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Axios from "axios";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./modules";


import TopPage from "./components/pages/TopPage";
import LoginPage from "./components/pages/LoginPage";

export const title = "Shotaro Ooki";
export const description =
  "This is Blog.";

export const copyright =
  "Copyright © " + title + " " + new Date().getFullYear() + ".";

export const endpoint = "http://localhost:8000/api";


export const store = createStore(reducer);


export const axios = Axios.create({
  baseURL: endpoint,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
  data: {},
  responseType: "json",
});


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/" component={TopPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
