import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import pokemon from "pokemontcgsdk";
import { getPokemons, searchCards } from "./store/pokemon/thunks";
import { NavBar } from "./components/Navbar";
import { Section } from "./components/Section";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SearchBar } from "./components/SearchBar";
import { AppRouter } from "./router/AppRouter";



export const PokemonApp = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(searchCards())
  }, [])


  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  //esta momorizado,no es necesario ponerlo como una dependencia en el useeffect

  return (
    <>
      <AppRouter />
    </>
  );
};
