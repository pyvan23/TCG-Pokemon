
import { useEffect } from "react";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";
import pokemon from 'pokemontcgsdk'
//thunk es una funcion que regresa una tarea asyncrona
export const getPokemons = (page = 1) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

   

    pokemon.card.where({ pageSize: 20, page: page })
      .then(result => {
        const data = result.data
        console.log(page)
        
          
        dispatch(setPokemons({ pokemons: data ,page: page }))
      })
      
    


  };
};
