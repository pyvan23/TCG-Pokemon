import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { IndexPage } from "../pages/IndexPage";
import { PokemonsCardsIndex } from "../routes/PokemonsCardsIndex";

export const AppRouter = () => {
  return (
    <>
       <Routes>
        <Route
          path="*"
          element={
            <PokemonsCardsIndex/>
          }/>
         </Routes>
    </>
  );
};
