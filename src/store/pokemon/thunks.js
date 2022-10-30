
import { useEffect } from "react";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";
import pokemon from 'pokemontcgsdk'
//thunk es una funcion que regresa una tarea asyncrona
export const getPokemons = (page = 1) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    //peticion http
    // const resp = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    // );
    // const data = await resp.json();
    // const { data } = await pokemonApi(`pokemon?limit=10&offset=${page * 10}`);
    //  console.log(data);
    // dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));

    pokemon.card.where({ pageSize: 20, page: page })
      .then(result => {
        const data = result.data
        console.log(page)
        
          
        dispatch(setPokemons({ pokemons: data ,page: page }))
      })
      
    


  };
};
