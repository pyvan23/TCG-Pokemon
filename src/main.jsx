import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./store/store";

import { PokemonApp } from "./PokemonApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <React.StrictMode>
      <Provider store={store}>
        <PokemonApp />
      </Provider>
  </React.StrictMode>
    </BrowserRouter>
);
