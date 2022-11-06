import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavBar } from "../components/Navbar";
import { Section } from "../components/Section";
import { AppRouter } from "../router/AppRouter";

export const IndexPage = () => {
  return (
    <>
     
        <NavBar />
        <Header />
        <Section />
        <Footer />
      
    </>
  );
};
