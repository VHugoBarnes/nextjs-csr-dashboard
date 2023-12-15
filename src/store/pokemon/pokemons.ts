import { createSlice } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons/interfaces";

interface FavoritePokemonsState {
  [key: string]: SimplePokemon
};

const initialState: FavoritePokemonsState = {
  "1": { id: "1", name: "bulbasaur" }
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {}
});

export const { } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;