import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPokemons } from "./store/pokemon/thunks";
import pokemon from "pokemontcgsdk";
import { NavBar } from "./components/Navbar";
import { Section } from "./components/Section";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SearchBar } from "./components/SearchBar";


export const PokemonApp = () => {
  const dispatch = useDispatch();
 

  const { isloading, page, pokemons } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  //esta momorizado,no es necesario ponerlo como una dependencia en el useeffect

  return (
    <>
      <NavBar />
      
      <span>Loading:{isloading ? "true" : "false"}</span>
      <Header />
      <button disabled={isloading} onClick={() => dispatch(getPokemons( page +1))}>
        Next
      </button>
      <button disabled={isloading} onClick={() => dispatch(getPokemons( page -1))}>
        Back
      </button>
      
      <Section />
      <Footer />
    </>
  );
};
