import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "../components/Navbar";
import { IndexPage } from "../pages/IndexPage";

export const PokemonsCardsIndex = () => {
  return (
    <>
      
      <Routes>
        <Route path="/*" element={<IndexPage />} />
      </Routes>
    </>
  );
};
