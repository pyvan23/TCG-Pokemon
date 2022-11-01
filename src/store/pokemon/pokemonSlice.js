import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    page: 1,
    pokemons: [],
    isloading: false,
  },
  reducers: {
    startLoadingPokemons: (state /* action */) => {
      state.isloading = true;
    },
    setPokemons: (state, action) => {
      state.isloading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
    searchCardsByName: (state,action)=>{
      state.isloading = false;

    }
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons,searchCardsByName } = pokemonSlice.actions;
