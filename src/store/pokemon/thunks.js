import {
  setPokemons,
  startLoadingPokemons,
  searchCardsByName,
} from "./pokemonSlice";
import pokemon from "pokemontcgsdk";

//thunk es una funcion que regresa una tarea asyncrona
export const getPokemons = (page = 1) => {

  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    pokemon.card.where({ pageSize: 20, page: page }).then((result) => {
      const data = result.data;
      console.log(page);

      dispatch(setPokemons({ pokemons: data, page: page }));
    });
  };
};
export const searchCards = (q = "") => {

  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    pokemon.card
      .where({ q: `name:${q}` })

      .then((result) => {
        console.log(result);
        const data = result.data;

        dispatch(
          searchCardsByName({
            pokemons: data,
          })
        );
      });
  };
};
