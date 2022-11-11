import React from "react";
import { Route, Routes } from "react-router-dom";
import { PokemonsCardsIndex } from "../routes/PokemonsCardsIndex";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<PokemonsCardsIndex />} />
      </Routes>
    </>
  );
};
