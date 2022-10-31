import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/store";

import { PokemonApp } from "./PokemonApp";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <PokemonApp/>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
