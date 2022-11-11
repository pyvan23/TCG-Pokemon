import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavBar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { Section } from "../components/Section";


export const IndexPage = () => {
  return (
    <>
      <div>
        <NavBar />
        <Header />
        <SearchBar />
        <Section />
        <Footer />
      </div>
    </>
  );
};
