import { configureStore } from '@reduxjs/toolkit'
import { pokemonSlice } from './pokemon/pokemonSlice'
import { counterSlice } from './slices/counter/counterSlices'

export const store = configureStore({
  reducer: {
    counter:counterSlice.reducer,
    pokemon:pokemonSlice.reducer
  },
})